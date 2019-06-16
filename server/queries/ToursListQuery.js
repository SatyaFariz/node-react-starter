const {
  forwardConnectionArgs
} = require('graphql-relay')

const TourConnection = require('../model/TourConnection')
const createGraphqlConnection = require('../utils/createGraphqlConnection')
const getTours = require('../utils/getTours')

module.exports = {
  tours: {
    type: TourConnection,
    args: forwardConnectionArgs,
    resolve: async (root, { after, first }) => {
      return await createGraphqlConnection(first, async (limit) => {
        return await getTours(
          {}, 
          { 
            limit: first, 
            cursor: after 
          }
        )
      })
    }
  }
}