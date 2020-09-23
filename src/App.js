import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import FacebookLoginButton from './components/facebook-login-button.component';
import Person from './components/person.component'


function App() {
  return (
    <Router>
      <div className="container" >
        <Route path="/" exact component={FacebookLoginButton} />
        <Route path="/person" exact component={Person} />
      </div>
    </Router>    
  );
}

export default App;
