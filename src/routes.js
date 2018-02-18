import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
  Home,
  App
} from 'containers';

export default(store, path) => {
  return (
    <Route path=":lang">
      <Route path="/" component={App} siteUrl={path}>
        {/* Home (main) route */}
        <IndexRoute component={Home} siteUrl={path}/>

        {/* Routes */}
        <Route path="/404" component={Home} status={404} siteUrl={path}/>
        <Route path="/:unknow" component={Home} status={404} siteUrl={path}/>
      </Route>
    </Route>
  );
};
