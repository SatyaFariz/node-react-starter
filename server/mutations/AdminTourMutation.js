const {
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLBoolean
} = require('graphql')

const Tour = require('../model/Tour')
const TourCreateInput = require('../model/input/TourCreateInput')
const adminTourCreate = require('../utils/mutation-resolvers/adminTourCreate')
const adminTourVisibilityUpdate = require('../utils/mutation-resolvers/adminTourVisibilityUpdate')
const adminTourHighlightsUpdate = require('../utils/mutation-resolvers/adminTourHighlightsUpdate')

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
  },

  tour_highlights_update: {
    type: Tour,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      highlights: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) }
    },
    resolve: adminTourHighlightsUpdate
  }
}