import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SectionHeader from './SectionHeader'

const useStyles = makeStyles(theme => ({
  container: {

  },

  a: {
    backgroundColor: theme.palette.grey[100],
    padding: 20
  }
}))

const Component = props => {
  const c = useStyles()

  return (
    <div className={c.container}>
      <SectionHeader title="Basic Info"/>
      <div className={c.a}>
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