const {
  GraphQLNonNull,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean
} = require('graphql')

const Tour = require('../model/Tour')
const Itinerary = require('../model/Itinerary')
const TourCreateInput = require('../model/input/TourCreateInput')
const ItineraryInput = require('../model/input/ItineraryInput')
const TourWhatsIncludedInput = require('../model/input/TourWhatsIncludedInput')
const TourBasicInfoInput = require('../model/input/TourBasicInfoInput')
const TourKidPriceInput = require('../model/input/TourKidPriceInput')
const TourPackagePriceInput = require('../model/input/TourPackagePriceInput')
const CoordinateInput = require('../model/input/CoordinateInput')
const adminTourCreate = require('../utils/mutation-resolvers/adminTourCreate')
const adminTourVisibilityUpdate = require('../utils/mutation-resolvers/adminTourVisibilityUpdate')
const adminTourHighlightsUpdate = require('../utils/mutation-resolvers/adminTourHighlightsUpdate')
const adminTourCancellationPolicyUpdate = require('../utils/mutation-resolvers/adminTourCancellationPolicyUpdate')
const adminTourTermsAndConditionsUpdate = require('../utils/mutation-resolvers/adminTourTermsAndConditionsUpdate')
const adminTourGuestRequirementsUpdate = require('../utils/mutation-resolvers/adminTourGuestRequirementsUpdate')
const adminTourMoreTipsUpdate = require('../utils/mutation-resolvers/adminTourMoreTipsUpdate')
const adminTourNextAvailableDateAdd = require('../utils/mutation-resolvers/adminTourNextAvailableDateAdd')
const adminTourAvailableDateDelete = require('../utils/mutation-resolvers/adminTourAvailableDateDelete')
const adminTourWhatsIncludedUpdate = require('../utils/mutation-resolvers/adminTourWhatsIncludedUpdate')
const adminTourBasicInfoUpdate = require('../utils/mutation-resolvers/adminTourBasicInfoUpdate')
const adminTourKidPriceUpdate = require('../utils/mutation-resolvers/adminTourKidPriceUpdate')
const adminTourKidPriceDelete = require('../utils/mutation-resolvers/adminTourKidPriceDelete')
const adminTourPackagePriceUpdate = require('../utils/mutation-resolvers/adminTourPackagePriceUpdate')
const adminTourPackagePriceDelete = require('../utils/mutation-resolvers/adminTourPackagePriceDelete')
const adminTourDescriptionUpdate = require('../utils/mutation-resolvers/adminTourDescriptionUpdate')
const adminTourLocationUpdate = require('../utils/mutation-resolvers/adminTourLocationUpdate')
const adminTourItineraryCreate = require('../utils/mutation-resolvers/adminTourItineraryCreate')
const adminTourItineraryUpdate = require('../utils/mutation-resolvers/adminTourItineraryUpdate')

module.exports = {
  tour_create: {
    type: Tour,
    args: {
      input: { type: new GraphQLNonNull(TourCreateInput) }
    },
    resolve: adminTourCreate
  },

  tour_description_update: {
    type: Tour,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: adminTourDescriptionUpdate
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
    resolve: adminTourNextAvailableDateAdd
  },

  tour_available_date_delete: {
    type: Tour,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      date: { type: new GraphQLNonNull(GraphQLInt) }
    },
    resolve: adminTourAvailableDateDelete
  },

  tour_whats_included_update: {
    type: Tour,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      whats_included: { type: new GraphQLNonNull(TourWhatsIncludedInput) }
    },
    resolve: adminTourWhatsIncludedUpdate
  },

  tour_basic_info_update: {
    type: Tour,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      basic_info: { type: new GraphQLNonNull(TourBasicInfoInput) }
    },
    resolve: adminTourBasicInfoUpdate
  },

  tour_kid_price_update: {
    type: Tour,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      kid_price: { type: new GraphQLNonNull(TourKidPriceInput) }
    },
    resolve: adminTourKidPriceUpdate
  },

  tour_kid_price_delete: {
    type: Tour,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: adminTourKidPriceDelete
  },

  tour_package_price_update: {
    type: Tour,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      package_price: { type: new GraphQLNonNull(TourPackagePriceInput) }
    },
    resolve: adminTourPackagePriceUpdate
  },

  tour_package_price_delete: {
    type: Tour,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: adminTourPackagePriceDelete
  },

  tour_location_update: {
    type: Tour,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      location: { type: new GraphQLNonNull(CoordinateInput) },
      location_details: { type: GraphQLString },
    },
    resolve: adminTourLocationUpdate
  },

  tour_itinerary_create: {
    type: Itinerary,
    args: {
      tour_id: { type: new GraphQLNonNull(GraphQLString) },
      input: { type: new GraphQLNonNull(ItineraryInput) }
    },
    resolve: adminTourItineraryCreate
  },

  tour_itinerary_update: {
    type: Itinerary,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      input: { type: new GraphQLNonNull(ItineraryInput) }
    },
    resolve: adminTourItineraryUpdate
  }
}