import React from 'react';
import {Provider}  from  'react-redux' ;
import {BrowserRouter as Router , Route} from 'react-router-dom' ;
import Home from "./components/Home"
import store from "./store" ;
import CardList from "./components/CardList";

function App() {
    return (
      <Provider store={store}>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/list" exact component={CardList} />
      </Router>
      </Provider>
    );
}

export default App;









































