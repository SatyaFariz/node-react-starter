import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { graphql, createFragmentContainer } from 'react-relay'
import NoImage from '../../assets/no_image_available.jpg'
import Link from '../../common/Link'

const useStyles = makeStyles(theme => ({
  container: {

  },
  image: {
    width: 200,
    height: 200 * 0.6667
  }
}))

const Component = props => {
  const c = useStyles()

  const { tour } = props

  return (
    <div className={c.container}>
      <Link href={`/admin/tours/${tour.id}`}>
        <div>
          <img 
            className={c.image}
            src={tour.display_image ? tour.display_image.secure_url : NoImage}
            alt={tour.id}
          />
          <Typography variant="body2">{tour.name}</Typography>
        </div>
      </Link>
    </div>
  )
}

export default createFragmentContainer(Component, {
  tour: graphql`
    fragment TourItem_tour on Tour {
      id,
      name,
      display_image {
        id,
        secure_url
      }
    }
  `
})