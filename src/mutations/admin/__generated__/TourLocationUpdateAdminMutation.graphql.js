/**
 * @flow
 * @relayHash e7b0cf324efa5b7c1d4a0ac3b72c0cf9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CoordinateInput = {|
  lat: number,
  lng: number,
|};
export type TourLocationUpdateAdminMutationVariables = {|
  _id: string,
  location_details: string,
  location: CoordinateInput,
|};
export type TourLocationUpdateAdminMutationResponse = {|
  +admin: ?{|
    +tour_location_update: ?{|
      +id: ?string,
      +location_details: ?string,
      +location: ?{|
        +lat: ?number,
        +lng: ?number,
      |},
    |}
  |}
|};
export type TourLocationUpdateAdminMutation = {|
  variables: TourLocationUpdateAdminMutationVariables,
  response: TourLocationUpdateAdminMutationResponse,
|};
*/


/*
mutation TourLocationUpdateAdminMutation(
  $_id: String!
  $location_details: String!
  $location: CoordinateInput!
) {
  admin {
    tour_location_update(_id: $_id, location_details: $location_details, location: $location) {
      id
      location_details
      location {
        lat
        lng
      }
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
    "name": "location_details",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "location",
    "type": "CoordinateInput!",
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
        "name": "tour_location_update",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "_id",
            "variableName": "_id"
          },
          {
            "kind": "Variable",
            "name": "location",
            "variableName": "location"
          },
          {
            "kind": "Variable",
            "name": "location_details",
            "variableName": "location_details"
          }
        ],
        "concreteType": "Tour",
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
    "name": "TourLocationUpdateAdminMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TourLocationUpdateAdminMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TourLocationUpdateAdminMutation",
    "id": null,
    "text": "mutation TourLocationUpdateAdminMutation(\n  $_id: String!\n  $location_details: String!\n  $location: CoordinateInput!\n) {\n  admin {\n    tour_location_update(_id: $_id, location_details: $location_details, location: $location) {\n      id\n      location_details\n      location {\n        lat\n        lng\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a88973051af63dd548b792470a76ae59';
module.exports = node;
