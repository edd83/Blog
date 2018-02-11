import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

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
        <Helmet>
          <title>First page</title>
          <meta name="description" content="This is some meta description" />
        </Helmet>
        <span>Good job, well done you done the setup!</span>
      </div>
    );
  }
}
