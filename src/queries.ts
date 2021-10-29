import { useQuery, useMutation } from 'react-query'
import * as db from 'database'

export const useSurveyQuery = (id: number) => useQuery(
  ['surveys',id],
  () => db.getSurvey(id)
)

export const useResponseMutation = () => useMutation(
  db.addResponse
)

export const useAllSurveysQuery = () => useQuery(
  ['surveys'],
  () => db.getAllSurveys(),
  { placeholderData: [] },
)
