/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './redux/create';
import ApiClient from './helpers/ApiClient';
import io from 'socket.io-client';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { ReduxAsyncConnect } from 'redux-async-connect';
import { useScroll } from 'react-router-scroll';
import getRoutes from './routes';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n-client';

const client = new ApiClient();
const _browserHistory = useScroll(() => browserHistory)();
const dest = document.getElementById('content');
const store = createStore(_browserHistory, client, window.__data);
const history = syncHistoryWithStore(_browserHistory, store);

function initSocket() {
  const socket = io('', {
    path: '/ws',
    transports: ['websocket'],
  });
  socket.on('news', () => {
    socket.emit('my other event', { my: 'data from client' });
  });
  socket.on('msg', (data) => {
    console.log(data);
  });

  return socket;
}

global.socket = initSocket();

i18n.changeLanguage(window.__i18n.locale);
i18n.addResourceBundle('fr', 'common', window.__i18n.resources, true);
i18n.addResourceBundle('en', 'common', window.__i18n.resources2, true);

const component = (
  <Router render={(props) =>
        <ReduxAsyncConnect {...props} helpers={{client}} filter={item => !item.deferred} />
      } history={history}>
    {getRoutes(store)}
  </Router>
);

console.log('component');
console.log(component);
console.log('component');

fetch('/siteUrl') // fetch from Express.js server
.then(response => response.json())
.then(result => {
  store.siteUrl = result.siteUrl;
  store.locale = window.__i18n.locale;
  ReactDOM.render(
    <I18nextProvider i18n={i18n}>
      <Provider store={store} key="provider">
          {component}
      </Provider>
    </I18nextProvider>,
    dest
  );
});

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
  }
}

if (__DEVTOOLS__ && !window.devToolsExtension) {
  const DevTools = require('./containers/DevTools/DevTools');
  ReactDOM.render(
    <I18nextProvider i18n={i18n}>
      <Provider store={store} key="provider">
        <div>
          {component}
          <DevTools />
        </div>
      </Provider>
    </I18nextProvider>,
    dest
  );
}
