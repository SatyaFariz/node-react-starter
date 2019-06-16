const {
  GraphQLNonNull,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean
} = require('graphql')

const Tour = require('../model/Tour')
const TourCreateInput = require('../model/input/TourCreateInput')
const adminTourCreate = require('../utils/mutation-resolvers/adminTourCreate')
const adminTourVisibilityUpdate = require('../utils/mutation-resolvers/adminTourVisibilityUpdate')
const adminTourHighlightsUpdate = require('../utils/mutation-resolvers/adminTourHighlightsUpdate')
const adminTourCancellationPolicyUpdate = require('../utils/mutation-resolvers/adminTourCancellationPolicyUpdate')
const adminTourTermsAndConditionsUpdate = require('../utils/mutation-resolvers/adminTourTermsAndConditionsUpdate')
const adminTourGuestRequirementsUpdate = require('../utils/mutation-resolvers/adminTourGuestRequirementsUpdate')
const adminTourMoreTipsUpdate = require('../utils/mutation-resolvers/adminTourMoreTipsUpdate')
const adminTourItineraryUpdate = require('../utils/mutation-resolvers/adminTourItineraryUpdate')
const adminTourNextAvailableDatesAdd = require('../utils/mutation-resolvers/adminTourNextAvailableDatesAdd')

module.exports = {
  tour_create: {
    type: Tour,
    args: {
      input: { type: new GraphQLNonNull(TourCreateInput) }
    },
    resolve: adminTourCreate
  },

  tour_visibility_update: {
    type: Tour,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      published: { type: new GraphQLNonNull(GraphQLBoolean) }
    },
    resolve: adminTourVisibilityUpdate
  },

  tour_highlights_update: {
    type: Tour,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      highlights: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) }
    },
    resolve: adminTourHighlightsUpdate
  },

  tour_cancellation_policy_update: {
    type: Tour,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      cancellation_policy: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) }
    },
    resolve: adminTourCancellationPolicyUpdate
  },

  tour_terms_and_conditions_update: {
    type: Tour,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      terms_and_conditions: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) }
    },
    resolve: adminTourTermsAndConditionsUpdate
  },

  tour_guest_requirements_update: {
    type: Tour,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      guest_requirements: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) }
    },
    resolve: adminTourGuestRequirementsUpdate
  },

  tour_more_tips_update: {
    type: Tour,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      more_tips: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) }
    },
    resolve: adminTourMoreTipsUpdate
  },

  tour_next_available_date_add: {
    type: Tour,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      date: { type: new GraphQLNonNull(GraphQLInt) }
    },
    resolve: adminTourNextAvailableDatesAdd
  },

  tour_itinerary_update: {
    type: Tour,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      itinerary: { 
        type: new GraphQLNonNull(new GraphQLList(
          new GraphQLNonNull(new GraphQLList(
            GraphQLString
          ))
        )) 
      }
    },
    resolve: adminTourItineraryUpdate
  }
}