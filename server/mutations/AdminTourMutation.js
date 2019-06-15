const {
  GraphQLNonNull,
  GraphQLString
} = require('graphql')

const TourCreateInput = require('../model/input/TourCreateInput')
const adminTourCreate = require('../utils/mutation-resolvers/adminTourCreate')

module.exports = {
  tour_create: {
    type: GraphQLString,
    args: {
      input: { type: new GraphQLNonNull(TourCreateInput) }
    },
    resolve: adminTourCreate
  }
}