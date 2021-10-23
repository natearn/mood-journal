import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'

const YesNo = ({ ask }: { ask: string }) => {
  const [answer,setAnswer] = useState<Boolean | null>(null)
  return (
    <fieldset>
      <Typography component="legend">{ask}</Typography>
      <ToggleButtonGroup
        value={answer}
        onChange={(event,value) => setAnswer(value)}
        exclusive
        aria-label="yes or no"
      >
        <ToggleButton value={true} aria-label="yes">
          <ThumbUpIcon />
        </ToggleButton>
        <ToggleButton value={false} aria-label="no">
          <ThumbDownIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </fieldset>
  )
}

export default YesNo
