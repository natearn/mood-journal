import { openDB, DBSchema, IDBPDatabase } from 'idb'

export enum QuestionType {
  YesNo = "YesNo",
  Mood = "Mood",
}

export type Question =
  | { kind: QuestionType.YesNo, ask: string }
  | { kind: QuestionType.Mood, ask: string }

export type Answer =
  | { kind: QuestionType.YesNo, answer: boolean }
  | { kind: QuestionType.Mood, answer: number }

export type Survey = {
  id?: number
  name: string
  questions: Array<Question>
  created?: Date
}

export type Response = {
  id?: number
  survey: number
  answers: Array<Answer>
  created?: Date
}

type Schema = DBSchema & {
  surveys: {
    key: number
    value: Survey
  }
  responses: {
    key: number
    value: Response
    indexes: {
      'survey': number
    }
  }
}

export type Database = IDBPDatabase<Schema>

const open = () => openDB<Schema>('mood-joural', 1, {
  upgrade(db, oldVersion) {
    if (oldVersion < 1) {
      db.createObjectStore('surveys', { keyPath: 'id', autoIncrement: true })
      const responses = db.createObjectStore('responses', { keyPath: 'id', autoIncrement: true })
      responses.createIndex('survey','survey')
    }
  }
})

export const run = async (f: (db: Database) => any) => {
  const db = await open()
  const result = await f(db)
  await db.close()
  return result
}

export const addSurvey = (s: Survey) => run(db => db.add('surveys', { ...s, created: new Date() }))
export const addResponse = (r: Response) => run(db => db.add('responses', { ...r, created: new Date() }))
export const getAllSurveys = () => run(db => db.getAll('surveys'))
export const getSurvey = (sid: number) => run(db => db.get('surveys', sid))
export const getSurveyResponses = (sid: number) => run(db => db.getAllFromIndex('responses', 'survey', IDBKeyRange.only(sid)))
export const getLatestResponse = (sid: number) => getSurveyResponses(sid).then(rs => rs.slice(-1)[0])
