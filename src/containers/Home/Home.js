import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.any,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <span>Bonjour dans Home</span>
      </div>
    );
  }
}
