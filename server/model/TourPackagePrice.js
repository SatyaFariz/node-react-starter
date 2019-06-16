const {
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLInt
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'TourPackagePrice',
  fields: () => ({
    price: {
      type: GraphQLFloat
    },

    number_of_people: {
      type: GraphQLInt
    }
  })
})