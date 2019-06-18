const {
  GraphQLFloat,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require('graphql')

module.exports = new GraphQLInputObjectType({
  name: 'TourPackagePriceInput',
  fields: () => ({
    price: {
      type: new GraphQLNonNull(GraphQLFloat)
    },

    number_of_people: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  })
})