import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { graphql, createFragmentContainer } from 'react-relay'
import Typography from '@material-ui/core/Typography'

import BasicInfo from './BasicInfo'
import WhatsIncluded from './WhatsIncluded'
import KidPrice from './KidPrice'
import PackagePrice from './PackagePrice'

const useStyles = makeStyles(theme => ({
  container: {
    padding: 40
  },

  innerContainer: {
    display: 'grid',
    gridGap: '20px'
  },
  title: {
    fontSize: 50
  }
}))

const Component = props => {
  const c = useStyles()

  return (
    <div className={c.container}>
      <Typography variant="h2" gutterBottom className={c.title}>
        Tour Detail
      </Typography>

      <div className={c.innerContainer}>
        <BasicInfo/>
        <WhatsIncluded/>
        <KidPrice/>
        <PackagePrice/>
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  tour: graphql`
    fragment TourDetailPage_tour on Tour {
      id
    }
  `
})