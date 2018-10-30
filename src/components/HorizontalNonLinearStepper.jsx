import React from 'react';
import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';
import StepButton from '@material-ui/core/StepButton';
import PropTypes from "prop-types";

class HorizontalNonLinearStepper extends React.Component {
  render() {
    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper linear={false} activeStep={this.props.step > 0 ? 1 : 0}>
          <Step>
            <StepButton onClick={() => {window.location = '../'}}>
              Start page
            </StepButton>
          </Step>
          {
            this.props.step === 1 &&
              <Step>
                <StepButton>
                  Spam / ham
                </StepButton>
              </Step>
          }
          {
            this.props.step === 2 &&
              <Step>
                <StepButton>
                  Clusters
                </StepButton>
              </Step>
          }
        </Stepper>
      </div>
    );
  }
}

HorizontalNonLinearStepper.propTypes = {
  step: PropTypes.number.isRequired
};

export default HorizontalNonLinearStepper;
