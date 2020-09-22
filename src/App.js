import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import PeopleList from './components/people-list.component';
import EditPerson from './components/edit-person.component';
import AddPerson from './components/add-person.component';


function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={PeopleList} />
        <Route path="/add" exact component={AddPerson} />
        <Route path="/edit/:id" exact component={EditPerson} />
      </div>
    </Router>    
  );
}

export default App;
