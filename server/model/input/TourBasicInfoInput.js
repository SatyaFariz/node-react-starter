const {
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require('graphql')

module.exports = new GraphQLInputObjectType({
  name: 'TourBasicInfoInput',
  fields: () => ({
    province: {
      type: new GraphQLNonNull(GraphQLString)
    },

    city: {
      type: new GraphQLNonNull(GraphQLString)
    },

    display_location: {
      type: new GraphQLNonNull(GraphQLString)
    },

    name: {
      type: new GraphQLNonNull(GraphQLString)
    },

    category: {
      type: GraphQLString
    },

    duration_in_days: {
      type: new GraphQLNonNull(GraphQLInt)
    },

    price_per_person: {
      type: new GraphQLNonNull(GraphQLFloat)
    },

    free_cancellation: {
      type: new GraphQLNonNull(GraphQLBoolean)
    },

    good_for: {
      type: GraphQLString
    }
  })
})