import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

@translate(['common'])
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const styles = require('./App.scss');
    return (
      <div className={styles.app}>
      <span>Eddy Lardet dans App</span>
        <div className={styles.appContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
