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
    <div className={c.container}>
      <SectionHeader title={props.title}/>
      <div onClick={props.toggleEdit}>
      Cancel
      </div>
    </div>
  )
}

export default Component