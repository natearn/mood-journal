import { useQuery } from 'react-query'
import * as db from 'database'

export const useSurvey = (id = 1) => useQuery(
  ['surveys',id],
  () => db.getSurvey(id)
)
