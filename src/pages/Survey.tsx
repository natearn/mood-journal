import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Container from '@mui/material/Container'

import MoodRating from 'components/MoodRating'
import YesNo from 'components/YesNo'
import { useSurveyQuery } from 'queries'

import * as db from 'database'

const Field = ({ question } : { question: db.Question }) => {
  switch (question.kind) {
    case db.QuestionType.YesNo:
      return <YesNo ask={question.ask} key={question.ask} />
    case db.QuestionType.Mood:
      return <MoodRating ask={question.ask} key={question.ask} />
    default:
      return null
  }
}

type SurveyProps = RouteComponentProps & { id?: string }
const Survey = (props: SurveyProps) => {
  const id = Number(props.id)
  const { data: survey } = useSurveyQuery(id)
  return (
    <Container maxWidth="md">
      <form>
        {survey?.questions.map((q) => (
          <Field question={q} key={q.ask} />
        ))}
      </form>
    </Container>
  )
}

export default Survey
