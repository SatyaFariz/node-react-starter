const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'TourKidPrice',
  fields: () => ({
    price_per_person: {
      type: GraphQLFloat
    },

    age_description: {
      type: GraphQLString
    }
  })
})