import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import NoteDetails from './components/notes/NoteDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

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
          <Route path ='/signin' component={SignIn} />
          <Route path ='/signup' component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
