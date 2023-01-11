import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { updateCurrentImage } from "../../actions";

function ImageResults({ images, props }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  React.useEffect(() => {
    updateCurrentImage(images[activeStep])
  }, [activeStep])

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.tags}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.webformatURL}
                alt={step.tags}
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small"
            onClick={handleBack}
            disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Box>
  );
}


function mapStateToProps(state) {
  return {
    images: state.imageState.images
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCurrentImage: (image) => {
      dispatch(updateCurrentImage(image));
    }
  };
};

export default connect(mapStateToProps)(ImageResults)


