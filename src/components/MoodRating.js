import React from 'react'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'

const moods = {
  1: <SentimentVeryDissatisfiedIcon />,
  2: <SentimentDissatisfiedIcon />,
  3: <SentimentSatisfiedIcon />,
  4: <SentimentSatisfiedAltIcon />,
  5: <SentimentVerySatisfiedIcon />,
}

const MoodsContainer = ({ value, ...rest }) => (
  <Box margin={1} {...rest}>{moods[value]}</Box>
)

const MoodRating = ({ label }) => {
  return (
    <fieldset>
      <Typography component="legend">{label}</Typography>
      <Box textAlign="center">
        <Rating
          name="mood-rating"
          IconContainerComponent={MoodsContainer}
          highlightSelectedOnly
        />
      </Box>
    </fieldset>
  )
}

export default MoodRating
