import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BarChart from 'react-d3-components/lib/BarChart';

import * as AnalysisActions from '../actions/analysis';
import LinearIndeterminate from '../../../components/LinearIndeterminate';

const styles = {
  chartContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  labelContainer: {
    display: 'flex',
    fontSize: 20,
    justifyContent: 'space-around'
  }
};

class Analysis extends React.Component {

  constructor(props) {
    super(props);
    props.actions.setup();
  }

  render() {
    const {hamCount, hamPoints, isFetching, spamCount, spamPoints} = this.props;

    if (spamPoints && hamPoints) {
      this.props.actions.setFetching(false);
    }

    if (isFetching) {
      return <LinearIndeterminate />;
    }

    const ham = { values: hamPoints };
    const spam = { values: spamPoints };

    return (
      <div>
        <div style={styles.chartContainer}>
          <BarChart
            data={ham}
            width={600}
            height={400}
            margin={{top: 10, bottom: 50, left: 50, right: 10}}
          />
          <BarChart
            data={spam}
            width={600}
            height={400}
            margin={{top: 10, bottom: 50, left: 50, right: 10}}
          />
        </div>
        <div style={styles.labelContainer}>
          <div>
            <b>Ham</b>
            <br/>
            Total count: {hamCount}
          </div>
          <div>
            <b>Spam</b>
            <br/>
            Total count: {spamCount}
          </div>
        </div>
      </div>
    );
  }
}

Analysis.propTypes = {
  actions: PropTypes.func,
  hamCount: PropTypes.number,
  hamPoints: PropTypes.arrayOf(),
  isFetching: PropTypes.bool,
  spamCount: PropTypes.number,
  spamPoints: PropTypes.arrayOf()
};

const mapStateToProps = state => ({
  hamCount: state.analysis.hamCount,
  hamPoints: state.analysis.hamPoints,
  isFetching: state.analysis.isFetching,
  spamCount: state.analysis.spamCount,
  spamPoints: state.analysis.spamPoints,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AnalysisActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Analysis)
