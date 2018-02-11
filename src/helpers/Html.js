import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
export default class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node,
    store: PropTypes.object,
    i18n: PropTypes.object,
    serverRequest: PropTypes.object
  };

  render() {
    const {assets, component, store, i18n} = this.props;
    console.log(component);
    const content = component
      ? ReactDOM.renderToString(component)
      : '';
    const head = Helmet.rewind();
    console.log(content);
    return (
      <html lang="fr">
        <head>
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}
          <link rel="stylesheet" type="text/css" href="/lib/afterChargingComponent.css"/>
          {Object.keys(assets.styles).map((style, key) => <link href={assets.styles[style]} key={key} media="screen, projection" rel="stylesheet" type="text/css" charSet="UTF-8"/>)}
          {Object.keys(assets.styles).length === 0
            ? <style dangerouslySetInnerHTML={{
                __html: require('../theme/bootstrap.config.js') + require('../containers/App/App.scss')._style
              }}/>
            : null}
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{
            __html: content
          }}/>
          <script dangerouslySetInnerHTML={{
            __html: `window.__data=${serialize(store.getState())};`
          }} charSet="UTF-8"/>
          <script dangerouslySetInnerHTML={{__html: `window.__i18n=${serialize(i18n)};`}} charSet="UTF-8"/>
          <script src={assets.javascript.main} charSet="UTF-8"/>
        </body>
      </html>
    );
  }
}
