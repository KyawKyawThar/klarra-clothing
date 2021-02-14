import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/homepage/homepage';

const HatPage = () => {
  return <h1>Hello From the Hat</h1>;
};
function App() {
  return (
    <div className='App'>
      <Switch>
        <HomePage exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
