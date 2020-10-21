import React from 'react';
import history from '../history';
import {Route,Router,NavLink,Switch} from 'react-router-dom';
import LoginPage from '../components/loginPage';
import Search from '../components/Search';
import  Status  from '../components/Status';
import Register from '../components/Register';

function Navbar() {
  return (
    <div >
    <div className = "container">
    <Router history={history}>
    <Navigation/>
     <Main/>
    </Router>
    </div>
    </div>
  );
}

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-info navbar-fixed">
    <ul className="navbar-nav mr-2 py-1">
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Register</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/login">Login</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/search">Search</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/status">Status</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Register} />
    <Route exact path='/login' component={LoginPage} />
    <Route exact path='/search' component={Search} />
    <Route exact path='/status' component={Status} />
  </Switch>
)

export default  Navbar;