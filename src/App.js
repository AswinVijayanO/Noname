import React from 'react';
import './App.css';
import {Router,Route,browserHistory} from 'react-router';
import Home from './components/Home';
import Signup from './components/Signup';


class App extends React.Component {
  render(){
    return (
      <div>
        <Router history={browserHistory}>
          <Route path={"home"} component={Home}/>
          <Route path={"signup"} component={Signup}/>
        </Router>
      </div>
        );
  }

}

export default App;
