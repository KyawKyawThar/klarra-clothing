import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './components/pages/homepage/home';
import ShopPage from './components/pages/shoppage/shop';
import SignInAndSignOut from './components/pages/sign-in and sign-out page/sig-in and sign-out';
import Header from './components/Header/Header';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './components/reducer/userReducer/userAction';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './components/reducer/userReducer/userSelector';

import CheckOut from './components/pages/checkoutPage/checkout';

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
          <Route exact path='/checkout' component={CheckOut} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignOut />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
// const mapStateToProps = ({ user }) => {
//   //console ka currentUser ko U.user Reducer ka currentUser
//   return {
//     currentUser: user.currentUser,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
