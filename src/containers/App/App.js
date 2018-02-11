import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Helmet from 'react-helmet';

@translate(['common'])
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    console.log('HELLO IN APP');
  }

  render() {
    const styles = require('./App.scss');
    return (
      <div className={styles.app}>
        <Helmet>
          <meta property="og:title" content="A title"/>
          <meta property="og:image:type" content="image/jpg"/>
          <meta property="og:image:width" content="100"/>
          <meta property="og:image:height" content="100"/>
        </Helmet>
        <div className={styles.appContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
