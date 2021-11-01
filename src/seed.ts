import { useEffect } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { run, QuestionType, Database } from 'database'

const surveys = [
  {
    id: 1,
    name: 'Daily Mood Journal',
    questions: [
      { kind: QuestionType.YesNo, ask: "Did you eat breakfast today?" },
      { kind: QuestionType.YesNo, ask: "Did you go outside today?" },
      { kind: QuestionType.YesNo, ask: "Did you exercise today?" },
      { kind: QuestionType.YesNo, ask: "Did you talk to a friend today?" },
      { kind: QuestionType.YesNo, ask: "Did you complete a chore today?" },
      { kind: QuestionType.Mood, ask: "How are you feeling today?" },
    ],
  },
]

export const seed = async (db: Database) => {
  await db.clear('surveys')
  await Promise.all(
    surveys.map(s => db.put('surveys', s))
  )
}

export const Seed = () => {
  const client = useQueryClient()
  const { mutate } = useMutation(
    () => run(seed),
    { onSuccess: () => client.invalidateQueries() },
  )
  useEffect(() => { mutate() }, [mutate])
  return null
}
