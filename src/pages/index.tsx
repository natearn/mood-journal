import React from 'react'
import { Router } from '@reach/router'

import Survey from './Survey'
import SurveyList from './SurveyList'

const Pages = () => {
  return (
    <Router basepath="/mood-journal">
      <Survey path="/survey/:id" />
      <SurveyList default />
    </Router>
  )
}

export default Pages
