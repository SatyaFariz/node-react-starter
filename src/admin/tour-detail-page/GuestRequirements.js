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
      <SectionHeader title="Guest Requirements"/>
      <div>
        <Typography>
          - dlkfj lkdjafl dsjfal sadklfjsa dsf skdfjasl dsfaj lfksdjafd slkdfjas fdfa
        </Typography>
        <Typography>
          - kldjfa kslkjaf d sdfklsajdlf  sdfkalsdjf sdlkfj assfd alskd jflsadjf s afdlsjf as
        </Typography>
        <Typography>
          - dlkfj lkdjafl dsjfal sadklfjsa dsf skdfjasl dsfaj lfksdjafd slkdfjas fdfa
        </Typography>
        <Typography>
          - kldjfa kslkjaf d sdfklsajdlf  sdfkalsdjf sdlkfj assfd alskd jflsadjf s afdlsjf as
        </Typography>
      </div>
    </div>
  )
}

export default Component