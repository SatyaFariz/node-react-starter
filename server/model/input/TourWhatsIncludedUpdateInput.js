const {
  GraphQLString,
  GraphQLInputObjectType
} = require('graphql')

module.exports = new GraphQLInputObjectType({
  name: 'TourWhatsIncludedUpdateInput',
  fields: () => ({
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
    }
  })
})