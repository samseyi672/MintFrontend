import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom' ;
import Home from "./components/Home";
import CardList from "./components/CardList";

function App() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/card-scheme/start" exact component={CardList} />
      </Router>
    );
}

export default App;









































