import React from 'react'
import { Router } from '@reach/router'
import Survey from './Survey'

const Pages = () => {
  return (
    <Router>
      <Survey default />
    </Router>
  )
}

export default Pages
