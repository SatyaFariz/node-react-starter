const {
  GraphQLEnumType,
} = require('graphql')

module.exports = new GraphQLEnumType({
  name: 'UserTypeEnum',
  values: {
    admin: {
      value: 'ADMIN'
    },
    regular_user: {
      value: 'REGULAR_USER'
    }
  }
})