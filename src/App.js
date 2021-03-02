import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/homepage/home';
import ShopPage from './components/pages/shoppage/shop';
import SignInAndSignOut from './components/pages/sign-in and sign-out page/sig-in and sign-out';
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  state = {
    currentUser: null,
  };
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);
        (await userRef).onSnapshot((snapshop) => {
          //console.log(snapshop.data());
          this.setState({
            currentUser: {
              id: snapshop.id,
              ...snapshop.data(),
            },
          });
          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribedFromAuth();
  }
  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
