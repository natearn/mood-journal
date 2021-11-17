// Rather than using a router with pages,
// I'm going to use a landing-page layout.

import Survey from 'components/Survey'
import Container from '@mui/material/Container'

const Page = () => (
  <Container maxWidth="md" component="main">
    <Survey id={1} />
  </Container>
)

export default Page
