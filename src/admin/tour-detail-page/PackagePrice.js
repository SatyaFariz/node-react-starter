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
        Package Price
      </Typography>
      <div>
        <Typography>
          Price: Test
        </Typography>
        <Typography>
          Number of People: Test
        </Typography>
      </div>
    </div>
  )
}

export default Component