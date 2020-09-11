import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import{Route ,Link,Switch, BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import User from './user';

import * as serviceWorker from './serviceWorker';
import visit from './visit';
import notfound from './notfound';

const routing=(
  <Router>
    <div>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/user">user</Link></li>
        <li><Link to="/visit">visit</Link></li>
        
        
      </ul>
    </div>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/user" component={User}/>
      <Route path="/visit" component={visit}/> 
      <Route  component={notfound}/> 

      </Switch>        
  </Router>
)

ReactDOM.render(
    routing,
  document.getElementById('root')
);

