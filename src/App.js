import './App.css';
import Home from './Screens/Home'
import {Route } from 'react-router-dom'
import Random from './Screens/Random'
import SearchName from './Screens/SearchName'
import RandomQuote from './Screens/RandomQuote'
import SearchQuote from './Screens/SearchQuote'
import RandomDeath from './Screens/RandomDead'
function App() {
  return (

    <>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/random" render={() => <Random />} />
      <Route exact path="/searchname" render={() => <SearchName />} />
      <Route exact path="/random/quote" render={() => <RandomQuote />} />
      <Route exact path="/quote" render={() => <SearchQuote />} />
      <Route exact path="/random/death" render={() => <RandomDeath />} />


    </>

  );
}

export default App;
