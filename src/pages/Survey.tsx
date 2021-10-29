import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

import MoodRating from 'components/MoodRating'
import YesNo from 'components/YesNo'
import { useSurveyQuery, useResponseMutation } from 'queries'

import * as db from 'database'

type FieldProps = { question: db.Question, onChange: (v: any) => void }
const Field = ({ question, onChange } : FieldProps) => {
  switch (question.kind) {
    case db.QuestionType.YesNo:
      return <YesNo ask={question.ask} key={question.ask} onChange={onChange} />
    case db.QuestionType.Mood:
      return <MoodRating ask={question.ask} key={question.ask} onChange={onChange} />
    default:
      return null
  }
}

type SurveyProps = RouteComponentProps & { id?: string }
const Survey = (props: SurveyProps) => {
  const id = Number(props.id)
  const {data: survey} = useSurveyQuery(id)
  const {mutate: addResponse} = useResponseMutation()
  const [response,setResponse] = useState<db.Response>({ survey: id, answers: [] })

  const setAnswer = (idx: number) => (val: any) => {
    setResponse(res => {
      res.answers[idx] = val
      return res
    })
  }

  const submitResponse = (event: React.SyntheticEvent) => {
    event.preventDefault()
    addResponse(response)
  }

  return (
    <Container maxWidth="md">
      <form onSubmit={submitResponse}>
        {survey?.questions.map((q: db.Question, i: number) => (
          <Field question={q} key={q.ask} onChange={setAnswer(i)} />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  )
}

export default Survey
