const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Tour',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: root => root._id.toString()
    },

    province: {
      type: GraphQLString
    },

    city: {
      type: GraphQLString
    },

    name: {
      type: GraphQLString
    },

    durations_in_days: {
      type: GraphQLInt
    },

    price_per_person: {
      type: GraphQLFloat
    },

    free_cancellation: {
      type: GraphQLBoolean
    },

    description: {
      type: GraphQLString
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
    },

    location_details: {
      type: GraphQLString
    },
  })
})