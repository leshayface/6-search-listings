import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path={'/'} exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;