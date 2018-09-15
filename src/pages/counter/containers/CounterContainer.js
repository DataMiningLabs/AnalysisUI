import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Counter } from '../components'
import * as CounterActions from '../actions/counter'

class CounterContainer extends React.Component {

  componentDidMount() {
    this.props.fetchNumbers();
  }

  render() {

    const { count, decrement, increment, incrementIfOdd } = this.props;

    return (
      <Counter
        counter={ count }
        increment={() => increment()}
        decrement={() => decrement()}
        incrementIfOdd={() => incrementIfOdd()}
      />
    )
  }
}

CounterContainer.propTypes = {
  count: PropTypes.number.isRequired,
  decrement: PropTypes.func.isRequired,
  fetchNumbers: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  count: state.counter.count
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
