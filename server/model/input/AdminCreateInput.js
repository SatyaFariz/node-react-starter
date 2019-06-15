const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql')

const { Username } = require('../scalars/Username')

module.exports = new GraphQLInputObjectType({
  name: 'AdminCreateInput',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },

    username: {
      type: new GraphQLNonNull(Username)
    },

    password: {
      type: new GraphQLNonNull(GraphQLString)
    }
  })
})


