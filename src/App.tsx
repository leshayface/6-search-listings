import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateListing from './components/listing/CreateListing';
import ListingDetails from './components/listing/ListingDetails';

function App() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-yellow-500 p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
          <span className="font-semibold text-xl tracking-tight text-black">Splash Buy</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to={'/'}>
              <p className="font-semibold block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4">Home</p>
            </Link>
            <Link to={'/create'}>
              <p className="font-semibold block mt-4 lg:inline-block lg:mt-0 hover:text-red mr-4">Create Listing</p>
            </Link>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/create'} exact component={CreateListing} />
        <Route path={'/listing/:id'} exact component={ListingDetails} />
      </Switch>
    </div>
  );
}

export default App;