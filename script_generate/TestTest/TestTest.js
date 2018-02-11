import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadTestTest} from 'redux/modules/testTest';

@connect(state => ({testTest: state.testTest.data}), dispatch => bindActionCreators({
  loadTestTest
}, dispatch))

export default class testTest extends Component {
  static propTypes = {
    testTest: PropTypes.object.isRequired,
    loadTestTest: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {testTest} = this.props; // eslint-disable-line no-shadow
    const styles = require('./TestTest.scss');
    return (
      <div>
        testTest
      </div>
    );
  }
}
