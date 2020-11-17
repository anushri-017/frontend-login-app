import React from 'react';
import history from '../history';
import {Route,Router,Switch} from 'react-router-dom';
import LoginPage from '../components/loginPage';
import Search from '../components/Search';
import Register from '../components/Register';
import HomePage from '../components/HomePage';
import PostLoginPage from "../components/PostLoginPage";
import VeiwUserDetails from '../components/veiwUserDetails';

function Navbar() {
  return (
    <div >
    <div className = "container">
    <Router history={history}>
     <Main/>
    </Router>
    </div>
    </div>
  );
}

const Main = () => (
  <Switch>
  <Route exact path='/' component={HomePage} />
    <Route exact path='/register' component={Register} />
    <Route exact path='/login' component={LoginPage} />
    <Route exact path='/search' component={Search} />
    <Route exact path = '/postLoginpage'  component = {PostLoginPage}/>
    <Route exact path = '/viewuserdetails'  component = {VeiwUserDetails}/>
  </Switch>
)
export default  Navbar;