import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
  NotFound,
  Home,
  App
} from 'containers';

export default(store, path) => {
  const myRoutes = (
    <Route>
      {/* Home (main) route */}
      <IndexRoute component={Home} siteUrl={path}/>
      {/* Routes */}
      <Route path="/404" component={NotFound} status={404} siteUrl={path}/>
      <Route path="/:unknow" component={NotFound} status={404} siteUrl={path}/>
    </Route>
  );
  return (
    <Route>
      <Route path="/" component={App} siteUrl={path}>
        {myRoutes}
      </Route>
    </Route>
  );
};
