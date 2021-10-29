import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Survey } from 'database'
import { useAllSurveysQuery } from 'queries'

import Container from '@mui/material/Container'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const Item = ({ name }: Survey) => (
  <ListItem key={name}>
    <ListItemButton>
      <ListItemText primary={name} />
    </ListItemButton>
  </ListItem>
)

const SurveyList = (props: RouteComponentProps) => {
  const { data: surveys } = useAllSurveysQuery()
  return (
    <Container maxWidth="sm">
      <nav aria-label="survey list">
        <List>
          {surveys?.map(Item)}
        </List>
      </nav>
    </Container>
  )
}

export default SurveyList
