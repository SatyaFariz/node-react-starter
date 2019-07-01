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
        Kid Price
      </Typography>
      <div>
        <Typography>
          Price/Person: Test
        </Typography>
        <Typography>
          Age Description: Test
        </Typography>
      </div>
    </div>
  )
}

export default Component