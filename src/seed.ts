import { useEffect } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { open, QuestionType } from 'database'

const surveys = [
  {
    name: 'mood',
    questions: [
      { kind: QuestionType.YesNo, ask: "Did you exercise today?" },
      { kind: QuestionType.YesNo, ask: "Did you eat breakfast today?" },
      { kind: QuestionType.YesNo, ask: "Did you finish a postit today?" },
      { kind: QuestionType.Mood, ask: "How are you feeling today?" },
    ],
  },
  {
    name: 'food',
    questions: [
      { kind: QuestionType.YesNo, ask: "Do you like pizza?" },
      { kind: QuestionType.YesNo, ask: "Do you like pasta?" },
      { kind: QuestionType.YesNo, ask: "Do you like bread?" },
      { kind: QuestionType.Mood, ask: "How do you feel about cheese?" },
    ],
  },
]

export const seed = async () => {
  const db = await open()
  await db.clear('surveys')
  await Promise.all(
    surveys.map(s => db.add('surveys', s))
  )
}

export const Seed = () => {
  const client = useQueryClient()
  const { mutate } = useMutation(
    seed,
    { onSuccess: () => client.invalidateQueries() },
  )
  useEffect(() => { mutate() }, [mutate])
  return null
}
