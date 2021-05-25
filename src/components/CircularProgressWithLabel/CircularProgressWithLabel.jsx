import React from 'react';

// Material UI
import { Box, CircularProgress, Typography } from '@material-ui/core';

function CircularProgressWithLabel(props) {
    return (
      <Box position="relative" className="justify-content-center" display="inline-flex">
        <CircularProgress justifycontent="center" size={150} variant="determinate" {...props} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifycontent="center"
        >
          <Typography variant="caption" component="div" color="secondary">
            {`${Math.round(
              props.value,
            )}%`} {props.text}
          </Typography>
        </Box>
      </Box>
    );
}
export default CircularProgressWithLabel;