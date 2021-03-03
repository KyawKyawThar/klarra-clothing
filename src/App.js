import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './components/pages/homepage/home';
import ShopPage from './components/pages/shoppage/shop';
import SignInAndSignOut from './components/pages/sign-in and sign-out page/sig-in and sign-out';
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './components/reducer/userReducer/userAction';

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshop) => {
          //console.log(snapshop.data());
          setCurrentUser({
            id: snapshop.id,
            ...snapshop.data(),
          });
          console.log(this.state);
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribedFromAuth();
  }
  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignOut} />
        </Switch>
      </div>
    );
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(null, mapStateToDispatch)(App);
