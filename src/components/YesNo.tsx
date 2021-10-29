import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'

type Props = { ask: string, onChange: (v: boolean | null) => void }
const YesNo = ({ ask, onChange }: Props) => {
  const [answer,setAnswer] = useState<boolean | null>(null)
  useEffect(() => { onChange(answer) }, [onChange,answer])
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
