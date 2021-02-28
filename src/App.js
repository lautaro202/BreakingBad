import './App.css';
import Home from './Screens/Home'
import {Route } from 'react-router-dom'
import Random from './Screens/Random'
function App() {
  return (

    <>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/random" render={() => <Random />} />
    </>

  );
}

export default App;
