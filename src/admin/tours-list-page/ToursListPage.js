import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import CreateTourForm from './CreateTourForm'
import ToursList from './ToursList'

const useStyles = makeStyles(theme => ({
  container: {
    padding: 20,
    display: 'flex'
  }
}))

const Component = props => {
  const c = useStyles()

  return (
    <div className={c.container}>
      <ToursList/>
      <CreateTourForm/>
    </div>
  )
}

export default Component

