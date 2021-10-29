import Pages from 'pages'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Seed } from 'seed'

const client = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Seed />
      <Pages />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
