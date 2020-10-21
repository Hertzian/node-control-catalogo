import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar'
import Dashboard from './screens/Dashboard/Dashboard'
import Catalogs from './screens/Catalogs/Catalogs'
import Concepts from './screens/Concepts/Concepts'
import Materials from './screens/Materials/Materials'
import Volumes from './screens/Volumes/Volumes'
import Users from './screens/Users/Users'

const App = () => {
  return (
    <>
      <header id='topnav'>
        <Router>
          <Navbar />
            <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path='/catalogs' component={Catalogs} />
              <Route path='/concepts' component={Concepts} />
              <Route path='/materials' component={Materials} />
              <Route path='/volumes' component={Volumes} />
              <Route path='/users' component={Users} />
            </Switch>
        </Router>
      </header>

      <Footer/>
    </>
  );
}

export default App;
