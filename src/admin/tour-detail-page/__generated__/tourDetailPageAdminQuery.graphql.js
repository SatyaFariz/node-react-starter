/**
 * @flow
 * @relayHash 960a9b4b890f805e75e02d65f1df27a2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout_loggedAdmin$ref = any;
type TourDetailPage_tour$ref = any;
export type tourDetailPageAdminQueryVariables = {|
  tourID: string
|};
export type tourDetailPageAdminQueryResponse = {|
  +logged_admin: ?{|
    +tour: ?{|
      +$fragmentRefs: TourDetailPage_tour$ref
    |},
    +$fragmentRefs: Layout_loggedAdmin$ref,
  |}
|};
export type tourDetailPageAdminQuery = {|
  variables: tourDetailPageAdminQueryVariables,
  response: tourDetailPageAdminQueryResponse,
|};
*/


/*
query tourDetailPageAdminQuery(
  $tourID: String!
) {
  logged_admin {
    ...Layout_loggedAdmin
    tour(tourID: $tourID) {
      ...TourDetailPage_tour
    }
  }
}

fragment Layout_loggedAdmin on LoggedAdmin {
  id
}

fragment TourDetailPage_tour on Tour {
  id
  ...Description_tour
  ...BasicInfo_tour
  ...WhatsIncluded_tour
  ...KidPrice_tour
  ...PackagePrice_tour
  ...Highlights_tour
  ...GuestRequirements_tour
  ...MoreTips_tour
  ...TermsAndConditions_tour
  ...CancellationPolicy_tour
  ...MapsAndLocationDetails_tour
  ...Itinerary_tour
}

fragment Description_tour on Tour {
  id
  description
  ...DescriptionEdit_tour
}

fragment BasicInfo_tour on Tour {
  id
  province
  city
  display_location
  name
  category
  duration_in_days
  price_per_person
  good_for
  ...BasicInfoEdit_tour
}

fragment WhatsIncluded_tour on Tour {
  id
  foods_included
  drinks_included
  accomodations_included
  tickets_included
  transportation_included
  equipment_included
  ...WhatsIncludedEdit_tour
}

fragment KidPrice_tour on Tour {
  id
  kid_price {
    price_per_person
    age_description
  }
  ...KidPriceEdit_tour
}

fragment PackagePrice_tour on Tour {
  id
  package_price {
    price
    number_of_people
  }
  ...PackagePriceEdit_tour
}

fragment Highlights_tour on Tour {
  id
  highlights
  ...HighlightsEdit_tour
}

fragment GuestRequirements_tour on Tour {
  id
  guest_requirements
  ...GuestRequirementsEdit_tour
}

fragment MoreTips_tour on Tour {
  id
  more_tips
  ...MoreTipsEdit_tour
}

fragment TermsAndConditions_tour on Tour {
  id
  terms_and_conditions
  ...TermsAndConditionsEdit_tour
}

fragment CancellationPolicy_tour on Tour {
  id
  cancellation_policy
  ...CancellationPolicyEdit_tour
}

fragment MapsAndLocationDetails_tour on Tour {
  id
  location_details
  location {
    lat
    lng
  }
}

fragment Itinerary_tour on Tour {
  id
  ...ItineraryCreateForm_tour
  itinerary {
    id
    ...ItineraryItem_itinerary
  }
}

fragment ItineraryCreateForm_tour on Tour {
  id
}

fragment ItineraryItem_itinerary on Itinerary {
  id
  tour_id
  time_description
  activity_title
  activity_description
  ...ItineraryItemEdit_itinerary
}

fragment ItineraryItemEdit_itinerary on Itinerary {
  id
  time_description
  activity_title
  activity_description
}

fragment CancellationPolicyEdit_tour on Tour {
  tourID
  cancellation_policy
}

fragment TermsAndConditionsEdit_tour on Tour {
  tourID
  terms_and_conditions
}

fragment MoreTipsEdit_tour on Tour {
  tourID
  more_tips
}

fragment GuestRequirementsEdit_tour on Tour {
  tourID
  guest_requirements
}

fragment HighlightsEdit_tour on Tour {
  tourID
  highlights
}

fragment PackagePriceEdit_tour on Tour {
  tourID
  package_price {
    price
    number_of_people
  }
}

fragment KidPriceEdit_tour on Tour {
  tourID
  kid_price {
    price_per_person
    age_description
  }
}

fragment WhatsIncludedEdit_tour on Tour {
  tourID
  foods_included
  drinks_included
  accomodations_included
  tickets_included
  transportation_included
  equipment_included
}

fragment BasicInfoEdit_tour on Tour {
  tourID
  province
  city
  display_location
  free_cancellation
  name
  category
  duration_in_days
  price_per_person
  good_for
}

fragment DescriptionEdit_tour on Tour {
  tourID
  description
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "tourID",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "tourID",
    "variableName": "tourID"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "price_per_person",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "tourDetailPageAdminQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "logged_admin",
        "storageKey": null,
        "args": null,
        "concreteType": "LoggedAdmin",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "tour",
            "storageKey": null,
            "args": (v1/*: any*/),
            "concreteType": "Tour",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "TourDetailPage_tour",
                "args": null
              }
            ]
          },
          {
            "kind": "FragmentSpread",
            "name": "Layout_loggedAdmin",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "tourDetailPageAdminQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "logged_admin",
        "storageKey": null,
        "args": null,
        "concreteType": "LoggedAdmin",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "tour",
            "storageKey": null,
            "args": (v1/*: any*/),
            "concreteType": "Tour",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "description",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "tourID",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "province",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "city",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "display_location",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "category",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "duration_in_days",
                "args": null,
                "storageKey": null
              },
              (v3/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "good_for",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "free_cancellation",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "foods_included",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "drinks_included",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "accomodations_included",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "tickets_included",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "transportation_included",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "equipment_included",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "kid_price",
                "storageKey": null,
                "args": null,
                "concreteType": "TourKidPrice",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "age_description",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "package_price",
                "storageKey": null,
                "args": null,
                "concreteType": "TourPackagePrice",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "price",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "number_of_people",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "highlights",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "guest_requirements",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "more_tips",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "terms_and_conditions",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cancellation_policy",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "location_details",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "location",
                "storageKey": null,
                "args": null,
                "concreteType": "Coordinate",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "lat",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "lng",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "itinerary",
                "storageKey": null,
                "args": null,
                "concreteType": "Itinerary",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "tour_id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "time_description",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "activity_title",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "activity_description",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "tourDetailPageAdminQuery",
    "id": null,
    "text": "query tourDetailPageAdminQuery(\n  $tourID: String!\n) {\n  logged_admin {\n    ...Layout_loggedAdmin\n    tour(tourID: $tourID) {\n      ...TourDetailPage_tour\n    }\n  }\n}\n\nfragment Layout_loggedAdmin on LoggedAdmin {\n  id\n}\n\nfragment TourDetailPage_tour on Tour {\n  id\n  ...Description_tour\n  ...BasicInfo_tour\n  ...WhatsIncluded_tour\n  ...KidPrice_tour\n  ...PackagePrice_tour\n  ...Highlights_tour\n  ...GuestRequirements_tour\n  ...MoreTips_tour\n  ...TermsAndConditions_tour\n  ...CancellationPolicy_tour\n  ...MapsAndLocationDetails_tour\n  ...Itinerary_tour\n}\n\nfragment Description_tour on Tour {\n  id\n  description\n  ...DescriptionEdit_tour\n}\n\nfragment BasicInfo_tour on Tour {\n  id\n  province\n  city\n  display_location\n  name\n  category\n  duration_in_days\n  price_per_person\n  good_for\n  ...BasicInfoEdit_tour\n}\n\nfragment WhatsIncluded_tour on Tour {\n  id\n  foods_included\n  drinks_included\n  accomodations_included\n  tickets_included\n  transportation_included\n  equipment_included\n  ...WhatsIncludedEdit_tour\n}\n\nfragment KidPrice_tour on Tour {\n  id\n  kid_price {\n    price_per_person\n    age_description\n  }\n  ...KidPriceEdit_tour\n}\n\nfragment PackagePrice_tour on Tour {\n  id\n  package_price {\n    price\n    number_of_people\n  }\n  ...PackagePriceEdit_tour\n}\n\nfragment Highlights_tour on Tour {\n  id\n  highlights\n  ...HighlightsEdit_tour\n}\n\nfragment GuestRequirements_tour on Tour {\n  id\n  guest_requirements\n  ...GuestRequirementsEdit_tour\n}\n\nfragment MoreTips_tour on Tour {\n  id\n  more_tips\n  ...MoreTipsEdit_tour\n}\n\nfragment TermsAndConditions_tour on Tour {\n  id\n  terms_and_conditions\n  ...TermsAndConditionsEdit_tour\n}\n\nfragment CancellationPolicy_tour on Tour {\n  id\n  cancellation_policy\n  ...CancellationPolicyEdit_tour\n}\n\nfragment MapsAndLocationDetails_tour on Tour {\n  id\n  location_details\n  location {\n    lat\n    lng\n  }\n}\n\nfragment Itinerary_tour on Tour {\n  id\n  ...ItineraryCreateForm_tour\n  itinerary {\n    id\n    ...ItineraryItem_itinerary\n  }\n}\n\nfragment ItineraryCreateForm_tour on Tour {\n  id\n}\n\nfragment ItineraryItem_itinerary on Itinerary {\n  id\n  tour_id\n  time_description\n  activity_title\n  activity_description\n  ...ItineraryItemEdit_itinerary\n}\n\nfragment ItineraryItemEdit_itinerary on Itinerary {\n  id\n  time_description\n  activity_title\n  activity_description\n}\n\nfragment CancellationPolicyEdit_tour on Tour {\n  tourID\n  cancellation_policy\n}\n\nfragment TermsAndConditionsEdit_tour on Tour {\n  tourID\n  terms_and_conditions\n}\n\nfragment MoreTipsEdit_tour on Tour {\n  tourID\n  more_tips\n}\n\nfragment GuestRequirementsEdit_tour on Tour {\n  tourID\n  guest_requirements\n}\n\nfragment HighlightsEdit_tour on Tour {\n  tourID\n  highlights\n}\n\nfragment PackagePriceEdit_tour on Tour {\n  tourID\n  package_price {\n    price\n    number_of_people\n  }\n}\n\nfragment KidPriceEdit_tour on Tour {\n  tourID\n  kid_price {\n    price_per_person\n    age_description\n  }\n}\n\nfragment WhatsIncludedEdit_tour on Tour {\n  tourID\n  foods_included\n  drinks_included\n  accomodations_included\n  tickets_included\n  transportation_included\n  equipment_included\n}\n\nfragment BasicInfoEdit_tour on Tour {\n  tourID\n  province\n  city\n  display_location\n  free_cancellation\n  name\n  category\n  duration_in_days\n  price_per_person\n  good_for\n}\n\nfragment DescriptionEdit_tour on Tour {\n  tourID\n  description\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '70b6244226e85fb5131dec5056cbe011';
module.exports = node;
