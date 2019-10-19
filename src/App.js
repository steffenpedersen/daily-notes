import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import NoteDetails from './components/notes/NoteDetails'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path ='/note/:id' component={NoteDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
