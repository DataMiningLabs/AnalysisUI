/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import {HeatmapSeries, XYPlot, XAxis, YAxis} from 'react-vis';

import * as ClusterActions from '../actions/cluster';
import LinearIndeterminate from '../../../components/LinearIndeterminate';
import HorizontalNonLinearStepper
  from "../../../components/HorizontalNonLinearStepper";

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

class Cluster extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
  }


  render() {
    const { loading, points } = this.props;

    return (
      <div>
        { loading && <LinearIndeterminate /> }
        <HorizontalNonLinearStepper step={2}/>
        <div style={styles.inputContainer}>
          <Input
            id="clusterN"
            error={this.state.error}
            inputProps={{ 'aria-label': 'Description' }}
            placeholder={'Type here number of clusters'}
            style={styles.inputStyle}
            width={50}
          />
          <Button
            variant="outlined"
            onClick={() => {
              const clusterN = document.getElementById('clusterN').value;
              if (clusterN.length === 0) {
                this.setState({error: true});
              } else {
                this.setState({error: false});
                this.props.actions.createClusters(clusterN);
              }
            }}
          >
            Analyse clusters
          </Button>
        </div>
        {
          points &&
            <div style={{ display: 'flex', justifyContent: 'center'}}>
              <XYPlot
                width={600}
                height={600}>
                <XAxis />
                <YAxis />
                <HeatmapSeries colorType="literal" data={points} />
              </XYPlot>
            </div>
        }
      </div>
    );
  }
}


Cluster.propTypes = {
  loading: PropTypes.bool,
  points: PropTypes.arrayOf()
};

const mapStateToProps = state => ({
  loading: state.cluster.loading,
  points: state.cluster.points
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ClusterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Cluster)
