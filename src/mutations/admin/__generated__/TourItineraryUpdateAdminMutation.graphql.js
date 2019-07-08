/**
 * @flow
 * @relayHash 0155c2369e208f5f27d1b34e01b0e105
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
export type TourItineraryUpdateAdminMutationVariables = {|
  _id: string,
  input: ItineraryInput,
|};
export type TourItineraryUpdateAdminMutationResponse = {|
  +admin: ?{|
    +tour_itinerary_update: ?{|
      +id: ?string,
      +time_description: ?string,
      +activity_title: ?string,
      +activity_description: ?string,
    |}
  |}
|};
export type TourItineraryUpdateAdminMutation = {|
  variables: TourItineraryUpdateAdminMutationVariables,
  response: TourItineraryUpdateAdminMutationResponse,
|};
*/


/*
mutation TourItineraryUpdateAdminMutation(
  $_id: String!
  $input: ItineraryInput!
) {
  admin {
    tour_itinerary_update(_id: $_id, input: $input) {
      id
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
    "name": "_id",
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
        "name": "tour_itinerary_update",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "_id",
            "variableName": "_id"
          },
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input"
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
    "name": "TourItineraryUpdateAdminMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TourItineraryUpdateAdminMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TourItineraryUpdateAdminMutation",
    "id": null,
    "text": "mutation TourItineraryUpdateAdminMutation(\n  $_id: String!\n  $input: ItineraryInput!\n) {\n  admin {\n    tour_itinerary_update(_id: $_id, input: $input) {\n      id\n      time_description\n      activity_title\n      activity_description\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4c438d5778af1ab48ce859095d4855dd';
module.exports = node;
