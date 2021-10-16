import React from 'react'
import Container from '@mui/material/Container'
import MoodRating from 'components/MoodRating'

// XXX: this is placeholder data
const questions = [
  { id: 1, label: "How do you feel today?" },
]

const toField = (question) => (
  <MoodRating {...question} key={question.id} />
)

const Survey = () => {
  return (
    <Container maxWidth="md">
      <form>
        {questions.map(toField)}
      </form>
    </Container>
  )
}

export default Survey
