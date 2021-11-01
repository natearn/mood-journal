import { useQuery, useMutation, useQueryClient } from 'react-query'
import * as db from 'database'

export const useSurveyQuery = (id: number) => useQuery(
  ['surveys',id],
  () => db.getSurvey(id)
)

export const useResponseMutation = () => {
  const client = useQueryClient()
  return useMutation(
    db.addResponse,
    { onSuccess: (data, vars) => client.invalidateQueries(['responses',vars.survey]) },
  )
}

export const useAllSurveysQuery = () => useQuery(
  ['surveys'],
  () => db.getAllSurveys(),
  { placeholderData: [] },
)

export const useSurveyResponsesQuery = (id: number) => useQuery(
  ['responses',id],
  () => db.getSurveyResponses(id),
  { placeholderData: [] },
)

export const useLatestResponseQuery = (id: number) => useQuery(
  ['responses',id,'latest'],
  () => db.getLatestResponse(id)
)
