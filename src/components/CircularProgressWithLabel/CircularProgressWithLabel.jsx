import React from 'react';

// Material UI
import { Box, CircularProgress, Typography } from '@material-ui/core';

function CircularProgressWithLabel(props) {
    // console.log( "hardware",navigator.hardwareConcurrency)
    return (
      <Box position="relative" className="justify-content-center" display="inline-flex">
        <CircularProgress justifyContent="center" size={150} variant="determinate" {...props} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
            props.value,
          )}%`} {props.text}</Typography>
        </Box>
        {/* <CircularProgress color="default" size={150} variant="determinate" thickness={10} value={100} /> */}
      </Box>
    );
}
export default CircularProgressWithLabel;