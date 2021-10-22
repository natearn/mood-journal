import Pages from 'pages'
import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Pages />
    </QueryClientProvider>
  )
}

export default App
