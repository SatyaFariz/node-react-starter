import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { graphql, createFragmentContainer } from 'react-relay'

const styles = props => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    height: '100%'
  }
})

class HomePage extends Component {
  render() {
    const { classes: c } = this.props
    return (
      <div className={c.container}>
        <Typography>Hello World!</Typography>
      </div>
    )
  }
}

export default createFragmentContainer(withStyles(styles)(HomePage), {
  loggedAdmin: graphql`
    fragment HomePage_loggedAdmin on LoggedAdmin {
      id
    }
  `
})