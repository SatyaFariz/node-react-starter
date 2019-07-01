import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  container: {

  }
}))

const Component = props => {
  const c = useStyles()

  return (
    <div className={c.container}>
      <Typography variant="h4" gutterBottom className={c.title}>
        Basic Info
      </Typography>
      <div>
        <Typography>
          Province: Test
        </Typography>
        <Typography>
          City: Test
        </Typography>
        <Typography>
          Display Location: Test
        </Typography>
        <Typography>
          Name: Test
        </Typography>
        <Typography>
          Category: -
        </Typography>
        <Typography>
          Duration: 2 Days
        </Typography>
        <Typography>
          Price/Person: Test
        </Typography>
        <Typography>
          Good For: Test
        </Typography>
      </div>
    </div>
  )
}

export default Component