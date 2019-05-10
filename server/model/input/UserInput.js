const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require('graphql')

const { GraphQLEmail } = require('graphql-custom-types')
const { Username } = require('../../scalars/Username')

module.exports = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },

    username: {
      type: new GraphQLNonNull(Username)
    },

    email: {
      type: new GraphQLNonNull(GraphQLEmail)
    },

    password: {
      type: new GraphQLNonNull(GraphQLString)
    }
  })
})