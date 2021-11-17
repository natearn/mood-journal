import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Seed } from 'seed'
import Page from 'Page'

const client = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Seed />
      <Page />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
