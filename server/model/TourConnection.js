const {
  connectionDefinitions
} = require('graphql-relay')

const Tour = require('./Tour')

const { connectionType: TourConnection } = connectionDefinitions({ nodeType: Tour })

module.exports = TourConnection