import { openDB, DBSchema, IDBPDatabase } from 'idb'

export type Question = string
export type Survey = {
  questions: Array<Question>
}

export type Answer = [string,string]
export type Response = {
  survey: number
  answers: Array<Answer>
}

interface Schema extends DBSchema {
  surveys: {
    key: number
    value: Survey
  }
  responses: {
    key: number
    value: Response
  }
}

// This will overwrite whatever was at (key: 1)
const seed = async (db: IDBPDatabase<Schema>) => {
  await db.put('surveys', { questions: ["How do you feel about today?"] }, 1)
  return db
}

export const open = () => openDB<Schema>('mood-joural', 1, {
  upgrade(db, oldVersion) {
    if (oldVersion < 1) {
      db.createObjectStore('surveys', { autoIncrement: true })
      db.createObjectStore('responses', { autoIncrement: true })
    }
  }
}).then(seed)

export const addSurvey = (s: Survey) => open().then(db => db.add('surveys', s))
export const addResponse = (r: Response) => open().then(db => db.add('responses', r))
export const getAllSurveys = () => open().then(db => db.getAll('surveys'))
export const getSurvey = (key: number) => open().then(db => db.get('surveys', key))
