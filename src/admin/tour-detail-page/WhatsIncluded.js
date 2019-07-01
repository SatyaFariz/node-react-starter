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
        What's Included
      </Typography>

      <div>
        <Typography>
          Foods: Test
        </Typography>
        <Typography>
          Drinks: Test
        </Typography>
        <Typography>
          Accomodations: Test
        </Typography>
        <Typography>
          Tickets: Test
        </Typography>
        <Typography>
          Transportation: -
        </Typography>
        <Typography>
          Equipment: 2 Days
        </Typography>
      </div>
    </div>
  )
}

export default Component