/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import BarChart from 'react-d3-components/lib/BarChart';

import * as AnalysisActions from '../actions/analysis';
import LinearIndeterminate from '../../../components/LinearIndeterminate';
import {FILE_BIG, FILE_LITTLE} from '../constants/FileTypes';

const styles = {
  chartContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  labelContainer: {
    display: 'flex',
    fontSize: 20,
    justifyContent: 'space-around'
  },
  inputContainer: {
    alignItems: 'baseline',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 20
  },
  inputStyle: {
    marginRight: 10,
    width: 300
  },
  messageType(messageType) {
    const color = messageType === 'HAM'
      ? '#66ad27'
      : '#c42121';
    return ({
      color,
      fontSize: 30,
      padding: 15
    });
  }
};

class Analysis extends React.Component {

  constructor(props) {
    super(props);
    this.state = { errorText: '' }
  }

  renderChoosingMode = () =>
    <div>
      <Button onClick={() => this.props.actions.setup(FILE_LITTLE)}>
        english.txt
      </Button>
      <Button onClick={() => this.props.actions.setup(FILE_BIG)}>
        english_big.txt
      </Button>
    </div>
  ;

  render() {
    const {
      hamCount, hamPoints, isChoosingMode, isFetching,
      messageType, spamCount, spamPoints
    } = this.props;

    if (spamPoints && hamPoints) {
      this.props.actions.setFetching(false);
    }

    if (isChoosingMode) {
      return this.renderChoosingMode();
    }

    if (isFetching) {
      return <LinearIndeterminate />;
    }

    const ham = { values: hamPoints };
    const spam = { values: spamPoints };

    return (
      <div>
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
        <div>
          <div style={styles.inputContainer}>
            <Input
              id="message"
              error={this.state.errorText.length > 0}
              inputProps={{ 'aria-label': 'Description' }}
              placeholder={'Type your message to check'}
              style={styles.inputStyle}
              width={100}
            />
            <Button
              variant="outlined"
              onClick={() => {
                const message = document.getElementById('message').value;
                if (message.length === 0) {
                  this.setState({errorText: 'Input is empty!'});
                } else {
                  this.setState({errorText: ''});
                  this.props.actions.analyseMessage(message);
                }
              }}
            >
              Analyse Message
            </Button>
          </div>
          <div style={styles.messageType(messageType)}>
            {messageType && messageType}
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
  isChoosingMode: PropTypes.bool,
  isFetching: PropTypes.bool,
  messageType: PropTypes.string,
  spamCount: PropTypes.number,
  spamPoints: PropTypes.arrayOf()
};

const mapStateToProps = state => ({
  hamCount: state.analysis.hamCount,
  hamPoints: state.analysis.hamPoints,
  isChoosingMode: state.analysis.isChoosingMode,
  isFetching: state.analysis.isFetching,
  messageType: state.analysis.messageType,
  spamCount: state.analysis.spamCount,
  spamPoints: state.analysis.spamPoints,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AnalysisActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Analysis)
