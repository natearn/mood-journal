import Pages from 'pages'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Seed } from 'seed'

const client = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Seed />
      <Pages />
    </QueryClientProvider>
  )
}

export default App
