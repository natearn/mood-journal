import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Container from '@mui/material/Container'
import MoodRating from 'components/MoodRating'

// TODO: refresh on using enum types in typescript

type Question = {
  type: string
  ask: string
  options?: string[]
}

// XXX: this is dummy data until we get a db going

const questions = [
  { type: 'mood', ask: "How do you feel today?" },
]

const Field = (question: Question) => {
  switch (question.type) {
    case 'mood':
      return <MoodRating {...question} key={question.ask} />
    default:
      return null
  }
}

const Survey = (props: RouteComponentProps) => {
  return (
    <Container maxWidth="md">
      <form>
        {questions.map(Field)}
      </form>
    </Container>
  )
}

export default Survey
