import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SectionHeader from './SectionHeader'

const useStyles = makeStyles(theme => ({
  container: {

  }
}))

const Component = props => {
  const c = useStyles()

  return (
    <div>
    <SectionHeader title={props.title}/>
    <div className={c.container} onClick={props.toggleEdit}>
      Eit
    </div>
    </div>
  )
}

export default Component