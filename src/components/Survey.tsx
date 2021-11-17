import React, { useState } from 'react'
import Button from '@mui/material/Button'
import MoodRating from 'components/MoodRating'
import YesNo from 'components/YesNo'
import {
  useSurveyQuery,
  useResponseMutation,
} from 'queries'
import * as db from 'database'

// This helper method is rather specific to the Survey component
type FieldProps = { question: db.Question, onChange: (v: any) => void }
const Field = ({ question, onChange } : FieldProps) => {
  switch (question.kind) {
    case db.QuestionType.YesNo:
      return (
        <YesNo
          ask={question.ask}
          key={question.ask}
          onChange={onChange}
        />
      )
    case db.QuestionType.Mood:
      return (
        <MoodRating
          ask={question.ask}
          key={question.ask}
          onChange={onChange}
        />
      )
    default:
      return null
  }
}

const Survey = ({ id }: { id: number }) => {
  const {data: survey} = useSurveyQuery(id)
  const {mutate: respond} = useResponseMutation()

  const [response,setResponse] = useState<db.Response>({
    survey: id,
    answers: []
  })

  const answer = (idx: number) => (val: any) => {
    setResponse(res => {
      res.answers[idx] = val
      return res
    })
  }

  const submit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    respond(response)
  }

  return (
    <form onSubmit={submit}>
      {survey?.questions.map((q: db.Question, i: number) => (
        <Field question={q} key={q.ask} onChange={answer(i)} />
      ))}
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default Survey
