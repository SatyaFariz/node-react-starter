const {
  GraphQLNonNull,
  GraphQLString
} = require('graphql')

const Tour = require('../model/Tour')
const getTourById = require('../utils/getTourById')

module.exports = {
  tour: {
    type: Tour,
    args: {
      tourID: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: async (root, { tourID }) => await getTourById(tourID)
  }
}