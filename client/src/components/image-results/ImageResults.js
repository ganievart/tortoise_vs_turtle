import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { updateCurrentImage } from "../../actions";
import { useSelector, useDispatch, connect, } from 'react-redux';

function ImageResults() {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const images = useSelector(state => state.imageState.images);
  const maxSteps = images.length;

  useEffect(() => {
    dispatch(updateCurrentImage(images[activeStep]));
  }, [dispatch, activeStep, images])

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <SwipeableViews
        // axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
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

export default connect()(ImageResults);



