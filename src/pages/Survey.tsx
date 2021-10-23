import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Container from '@mui/material/Container'

import MoodRating from 'components/MoodRating'
import YesNo from 'components/YesNo'

import * as db from 'database'
const defaultSurvey = {
  questions: [
    { kind: db.QuestionType.YesNo, ask: "Did you eat breakfast?" },
    { kind: db.QuestionType.YesNo, ask: "Did you exercise?" },
    { kind: db.QuestionType.Mood, ask: "How do you feel?" },
  ],
}

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

const Survey = (props: RouteComponentProps) => {
  const survey = defaultSurvey;
  return (
    <Container maxWidth="md">
      <form>
        {survey?.questions.map((q) => (
          <Field question={q} />
        ))}
      </form>
    </Container>
  )
}

export default Survey
