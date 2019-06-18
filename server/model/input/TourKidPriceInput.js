const {
  GraphQLFloat,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require('graphql')

module.exports = new GraphQLInputObjectType({
  name: 'TourKidPriceInput',
  fields: () => ({
    price_per_person: {
      type: new GraphQLNonNull(GraphQLFloat)
    },

    age_description: {
      type: new GraphQLNonNull(GraphQLString)
    }
  })
})