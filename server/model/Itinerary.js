const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Itinerary',
  fields: () => ({
    time_description: {
      type: GraphQLString
    },

    activity_title: {
      type: GraphQLString
    },

    activity_description: {
      type: GraphQLString
    }
  })
})