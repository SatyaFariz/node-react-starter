const {
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require('graphql')

module.exports = new GraphQLInputObjectType({
  name: 'TourCreateInput',
  fields: () => ({
    province: {
      type: new GraphQLNonNull(GraphQLString)
    },

    city: {
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

    description: {
      type: new GraphQLNonNull(GraphQLString)
    },

    free_cancellation: {
      type: new GraphQLNonNull(GraphQLBoolean)
    },

    foods_included: {
      type: GraphQLString
    },

    drinks_included: {
      type: GraphQLString
    },

    accomodations_included: {
      type: GraphQLString
    },

    tickets_included: {
      type: GraphQLString
    },

    transportation_included: {
      type: GraphQLString
    },

    equipment_included: {
      type: GraphQLString
    },

    good_for: {
      type: GraphQLString
    }
  })
})