const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Itinerary',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: root => root._id.toString()
    },

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