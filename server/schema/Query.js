const {
  GraphQLObjectType
} = require('graphql')

const LoggedUser = require('../model/LoggedUser')
const LoggedAdmin = require('../model/LoggedAdmin')
const ToursListQuery = require('../queries/ToursListQuery')
const TourQuery = require('../queries/TourQuery')

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    logged_user: {
      type: LoggedUser,
      resolve: (root, args, { session: { user }}) => user
    },

    logged_admin: {
      type: LoggedAdmin,
      resolve: (root, args, { session: { admin }}) => admin
    },

    ...ToursListQuery,
    ...TourQuery
  })
})