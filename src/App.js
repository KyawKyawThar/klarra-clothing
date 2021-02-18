import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/homepage/home';
import ShopPage from './components/pages/shoppage/shop';
import SignInAndSignOut from './components/pages/sign-in and sign-out page/sig-in and sign-out';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignOut} />
      </Switch>
    </div>
  );
}

export default App;
