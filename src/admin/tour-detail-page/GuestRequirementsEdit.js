import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { graphql, createFragmentContainer } from 'react-relay'

const useStyles = makeStyles(theme => ({
  container: {

  }
}))

const Component = props => {
  const c = useStyles()

  return (
    <div className={c.container} onClick={props.closeEdit}>
      Cancel
    </div>
  )
}

export default createFragmentContainer(Component, {
  tour: graphql`
    fragment GuestRequirementsEdit_tour on Tour {
      tourID,
      guest_requirements
    }
  `
})