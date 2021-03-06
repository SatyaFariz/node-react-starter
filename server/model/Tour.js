const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList
} = require('graphql')

const Image = require('./Image')
const TourKidPrice = require('./TourKidPrice')
const TourPackagePrice = require('./TourPackagePrice')
const Coordinate = require('./Coordinate')
const Itinerary = require('./Itinerary')

const itineraryLoader = require('../dataloader/itineraryLoader')

module.exports = new GraphQLObjectType({
  name: 'Tour',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: root => root._id.toString()
    },

    tourID: {
      type: GraphQLString,
      resolve: root => root._id.toString()
    },

    tour_id: {
      type: GraphQLString,
      resolve: root => root._id.toString()
    },

    province: {
      type: GraphQLString
    },

    city: {
      type: GraphQLString
    },

    display_location: {
      type: GraphQLString
    },

    name: {
      type: GraphQLString
    },

    category: {
      type: GraphQLString
    },

    duration_in_days: {
      type: GraphQLInt
    },

    price_per_person: {
      type: GraphQLFloat
    },

    kid_price: {
      type: TourKidPrice
    },

    package_price: {
      type: TourPackagePrice
    },

    free_cancellation: {
      type: GraphQLBoolean
    },

    description: {
      type: GraphQLString
    },

    foods_included: {
      type: GraphQLString
    },

    drinks_included: {
      type: GraphQLString
    },

    accomodations_included: {
      type: GraphQLString
    },

    tickets_included: {
      type: GraphQLString
    },

    transportation_included: {
      type: GraphQLString
    },

    equipment_included: {
      type: GraphQLString
    },

    good_for: {
      type: GraphQLString
    },

    location: {
      type: Coordinate
    },

    location_details: {
      type: GraphQLString
    },

    next_available_dates: {
      type: new GraphQLList(GraphQLInt)
    },

    highlights: {
      type: new GraphQLList(GraphQLString)
    },

    terms_and_conditions: {
      type: new GraphQLList(GraphQLString)
    },

    cancellation_policy: {
      type: new GraphQLList(GraphQLString)
    },

    guest_requirements: {
      type: new GraphQLList(GraphQLString)
    },    

    more_tips: {
      type: new GraphQLList(GraphQLString)
    },

    itinerary: {
      type: new GraphQLList(Itinerary),
      resolve: async root => await itineraryLoader.load(root._id)
    },

    display_image: {
      type: Image
    },

    images: {
      type: new GraphQLList(Image)
    },

    published: {
      type: GraphQLBoolean
    }
  })
})