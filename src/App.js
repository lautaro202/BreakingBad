import './App.css';
import Home from './Screens/Home'
import {Route } from 'react-router-dom'
import Random from './Screens/Random'
import SearchName from './Screens/SearchName'
function App() {
  return (

    <>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/random" render={() => <Random />} />
      <Route exact path="/searchname" render={() => <SearchName />} />

    </>

  );
}

export default App;
