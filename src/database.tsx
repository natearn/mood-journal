import { openDB, DBSchema, IDBPDatabase } from 'idb'

export type Question = string
export type Survey = {
  id?: number
  questions: Array<Question>
}

export type Answer = [string,string]
export type Response = {
  id?: number
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
    indexes: { 'survey-id': number }
  }
}

// This will overwrite whatever was at (id: 1)
const seed = async (db: IDBPDatabase<Schema>) => {
  await db.put('surveys', { questions: ["How do you feel about today?"] }, 1)
  return db
}

export const open = () => openDB<Schema>('mood-joural', 1, {
  upgrade(db, oldVersion) {
    if (oldVersion < 1) {
      db.createObjectStore('surveys', { keyPath: 'id', autoIncrement: true })
      const responses = db.createObjectStore('responses', { keyPath: 'id', autoIncrement: true })
      responses.createIndex('survey-id','survey')
    }
  }
}).then(seed)

export const addSurvey = (s: Survey) => open().then(db => db.add('surveys', s))
export const addResponse = (r: Response) => open().then(db => db.add('responses', r))
export const getAllSurveys = () => open().then(db => db.getAll('surveys'))
export const getSurvey = (id: number) => open().then(db => db.get('surveys', id))
