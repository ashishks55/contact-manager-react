import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contacts from './components/contacts/Contacts.js'
import AddContact from './components/contacts/AddContact.js'
import EditContact from './components/contacts/EditContact.js'
import Header from './components/layout/Header.js'
import About from './components/pages/About.js'
import NotFound from './components/pages/NotFound.js'
import { Provider } from './context.js'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager"/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route exact path="/add" component={AddContact}/>
                <Route exact path="/edit/:id" component={EditContact}/>
                <Route exact path="/about" component={About}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
