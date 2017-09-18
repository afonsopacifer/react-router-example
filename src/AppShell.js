import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Home  from './views/Home';
import Page1 from './views/Page1';
import Page2 from './views/Page2';

class AppShell extends Component {
  render() {
    return (
      <div>

        <h1> react-router-example </h1>

        <Link to='/'> Home </Link>
        <Link to='/page1'> Page 1 </Link>
        <Link to='/page2'> Page 2 </Link>

        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/page1' component={ Page1 } />
          <Route path='/page2' component={ Page2 } />
        </Switch>

      </div>
    );
  }
}

export default AppShell;
