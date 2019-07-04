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
      <SectionHeader title="Highlights"/>
      <div>
        <Typography>
          - dkfjajsdlfjklasdf dskfja  dsfajlksdfj a sdfkjasdklfj  safdjalskfj
        </Typography>
        <Typography>
          - ksdjf ksjflasd f dklfjalds  dfjalsdf sdfj asfd
        </Typography>
      </div>
    </div>
  )
}

export default Component