import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import CreateTourForm from './CreateTourForm'

const useStyles = makeStyles(theme => ({
  container: {
    padding: 20
  }
}))

const Component = props => {
  const c = useStyles()

  return (
    <div className={c.container}>
      <CreateTourForm/>
    </div>
  )
}

export default Component

