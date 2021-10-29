import { openDB, DBSchema } from 'idb'

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

interface Schema extends DBSchema {
  surveys: {
    key: number
    value: Survey
  }
  responses: {
    key: number
    value: Response
    indexes: { 'survey-id': number }
  }
}

export const open = () => openDB<Schema>('mood-joural', 1, {
  upgrade(db, oldVersion) {
    if (oldVersion < 1) {
      db.createObjectStore('surveys', { keyPath: 'id', autoIncrement: true })
      const responses = db.createObjectStore('responses', { keyPath: 'id', autoIncrement: true })
      responses.createIndex('survey-id','survey')
    }
  }
})

export const addSurvey = (s: Survey) => open().then(db => db.add('surveys', { ...s, created: new Date() }))
export const addResponse = (r: Response) => open().then(db => db.add('responses', { ...r, created: new Date() }))
export const getAllSurveys = () => open().then(db => db.getAll('surveys'))
export const getSurvey = (sid: number) => open().then(db => db.get('surveys', sid))
export const getSurveyResponses = (sid: number) => open().then(db => db.getAllFromIndex('responses', 'survey-id', IDBKeyRange.only(sid)))
