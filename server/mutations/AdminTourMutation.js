const {
  GraphQLNonNull
} = require('graphql')

const Tour = require('../model/Tour')
const TourCreateInput = require('../model/input/TourCreateInput')
const adminTourCreate = require('../utils/mutation-resolvers/adminTourCreate')

module.exports = {
  tour_create: {
    type: Tour,
    args: {
      input: { type: new GraphQLNonNull(TourCreateInput) }
    },
    resolve: adminTourCreate
  }
}