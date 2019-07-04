import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SectionHeader from './SectionHeader'

const useStyles = makeStyles(theme => ({
  container: {

  }
}))

const Component = props => {
  const c = useStyles()

  return (
    <div className={c.container}>
      <SectionHeader title="Kid Price"/>
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