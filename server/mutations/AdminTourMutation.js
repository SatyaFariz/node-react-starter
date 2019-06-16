const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean
} = require('graphql')

const Tour = require('../model/Tour')
const TourCreateInput = require('../model/input/TourCreateInput')
const adminTourCreate = require('../utils/mutation-resolvers/adminTourCreate')
const adminTourVisibilityUpdate = require('../utils/mutation-resolvers/adminTourVisibilityUpdate')

module.exports = {
  tour_create: {
    type: Tour,
    args: {
      input: { type: new GraphQLNonNull(TourCreateInput) }
    },
    resolve: adminTourCreate
  },

  tour_visibility_update: {
    type: Tour,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      published: { type: new GraphQLNonNull(GraphQLBoolean) }
    },
    resolve: adminTourVisibilityUpdate
  }
}