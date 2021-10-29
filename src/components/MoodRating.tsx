import React from 'react'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'

const moods: Record<number, React.ReactNode> = {
  1: <SentimentVeryDissatisfiedIcon />,
  2: <SentimentDissatisfiedIcon />,
  3: <SentimentSatisfiedIcon />,
  4: <SentimentSatisfiedAltIcon />,
  5: <SentimentVerySatisfiedIcon />,
}

const MoodsContainer = ({ value, ...rest }: { value: number }) => (
  <span {...rest}>{moods[value]}</span>
)

type Props = { ask: string, onChange: (v: number | null) => void }
const MoodRating = ({ ask, onChange }: Props) => {
  return (
    <fieldset>
      <Typography component="legend">{ask}</Typography>
      <Rating
        name="mood-rating"
        IconContainerComponent={MoodsContainer}
        highlightSelectedOnly
        onChange={(e,v) => onChange(v)}
      />
    </fieldset>
  )
}

export default MoodRating
