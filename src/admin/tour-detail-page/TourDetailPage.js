import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { graphql, createFragmentContainer } from 'react-relay'
import Typography from '@material-ui/core/Typography'

import BasicInfo from './BasicInfo'
import Description from './Description'
import WhatsIncluded from './WhatsIncluded'
import KidPrice from './KidPrice'
import PackagePrice from './PackagePrice'
import Highlights from './Highlights'
import GuestRequirements from './GuestRequirements'
import MoreTips from './MoreTips'
import TermsAndConditions from './TermsAndConditions'
import CancellationPolicy from './CancellationPolicy'
import Itinerary from './Itinerary'

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

  const { tour } = props

  return (
    <div className={c.container}>
      <Typography variant="h2" gutterBottom className={c.title}>
        Tour Detail
      </Typography>

      <div className={c.innerContainer}>
        <BasicInfo tour={tour}/>
        <Description tour={tour}/>
        <WhatsIncluded tour={tour}/>
        <KidPrice tour={tour}/>
        <PackagePrice/>
        <Highlights/>
        <GuestRequirements/>
        <MoreTips/>
        <TermsAndConditions/>
        <CancellationPolicy/>
        <Itinerary/>
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  tour: graphql`
    fragment TourDetailPage_tour on Tour {
      id,
      ...Description_tour,
      ...BasicInfo_tour,
      ...WhatsIncluded_tour,
      ...KidPrice_tour
    }
  `
})