import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Container from '@mui/material/Container'
import MoodRating from 'components/MoodRating'

import { useSurvey } from 'queries/useSurvey'

const Survey = (props: RouteComponentProps) => {
  const { data: survey } = useSurvey()
  return (
    <Container maxWidth="md">
      <form>
        {survey?.questions.map((q) => (
          <MoodRating ask={q} key={q} />
        ))}
      </form>
    </Container>
  )
}

export default Survey
