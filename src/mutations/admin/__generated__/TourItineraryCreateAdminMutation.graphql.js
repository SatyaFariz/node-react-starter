/**
 * @flow
 * @relayHash cc5e32428de9d6dd0cafee4808c03d11
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ItineraryInput = {|
  time_description: string,
  activity_title: string,
  activity_description: string,
|};
export type TourItineraryCreateAdminMutationVariables = {|
  tour_id: string,
  input: ItineraryInput,
|};
export type TourItineraryCreateAdminMutationResponse = {|
  +admin: ?{|
    +tour_itinerary_create: ?{|
      +id: ?string,
      +tour_id: ?string,
      +time_description: ?string,
      +activity_title: ?string,
      +activity_description: ?string,
    |}
  |}
|};
export type TourItineraryCreateAdminMutation = {|
  variables: TourItineraryCreateAdminMutationVariables,
  response: TourItineraryCreateAdminMutationResponse,
|};
*/


/*
mutation TourItineraryCreateAdminMutation(
  $tour_id: String!
  $input: ItineraryInput!
) {
  admin {
    tour_itinerary_create(tour_id: $tour_id, input: $input) {
      id
      tour_id
      time_description
      activity_title
      activity_description
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "tour_id",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ItineraryInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "admin",
    "storageKey": null,
    "args": null,
    "concreteType": "AdminMutation",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tour_itinerary_create",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input"
          },
          {
            "kind": "Variable",
            "name": "tour_id",
            "variableName": "tour_id"
          }
        ],
        "concreteType": "Itinerary",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TourItineraryCreateAdminMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TourItineraryCreateAdminMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TourItineraryCreateAdminMutation",
    "id": null,
    "text": "mutation TourItineraryCreateAdminMutation(\n  $tour_id: String!\n  $input: ItineraryInput!\n) {\n  admin {\n    tour_itinerary_create(tour_id: $tour_id, input: $input) {\n      id\n      tour_id\n      time_description\n      activity_title\n      activity_description\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0ba68a93faa5ee6bd6e68bfb677ce5d5';
module.exports = node;
