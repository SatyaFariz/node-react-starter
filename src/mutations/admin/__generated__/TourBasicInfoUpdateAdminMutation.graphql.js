/**
 * @flow
 * @relayHash 09a2a3d57f865cb6286824d218cfeb6d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TourBasicInfoInput = {|
  province: string,
  city: string,
  display_location: string,
  name: string,
  category?: ?string,
  duration_in_days: number,
  price_per_person: number,
  free_cancellation: boolean,
  good_for?: ?string,
|};
export type TourBasicInfoUpdateAdminMutationVariables = {|
  _id: string,
  basic_info: TourBasicInfoInput,
|};
export type TourBasicInfoUpdateAdminMutationResponse = {|
  +admin: ?{|
    +tour_basic_info_update: ?{|
      +id: ?string,
      +province: ?string,
      +city: ?string,
      +display_location: ?string,
      +name: ?string,
      +category: ?string,
      +duration_in_days: ?number,
      +price_per_person: ?number,
      +good_for: ?string,
    |}
  |}
|};
export type TourBasicInfoUpdateAdminMutation = {|
  variables: TourBasicInfoUpdateAdminMutationVariables,
  response: TourBasicInfoUpdateAdminMutationResponse,
|};
*/


/*
mutation TourBasicInfoUpdateAdminMutation(
  $_id: String!
  $basic_info: TourBasicInfoInput!
) {
  admin {
    tour_basic_info_update(_id: $_id, basic_info: $basic_info) {
      id
      province
      city
      display_location
      name
      category
      duration_in_days
      price_per_person
      good_for
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
    "name": "basic_info",
    "type": "TourBasicInfoInput!",
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
        "name": "tour_basic_info_update",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "_id",
            "variableName": "_id"
          },
          {
            "kind": "Variable",
            "name": "basic_info",
            "variableName": "basic_info"
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "price_per_person",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "good_for",
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
    "name": "TourBasicInfoUpdateAdminMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TourBasicInfoUpdateAdminMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TourBasicInfoUpdateAdminMutation",
    "id": null,
    "text": "mutation TourBasicInfoUpdateAdminMutation(\n  $_id: String!\n  $basic_info: TourBasicInfoInput!\n) {\n  admin {\n    tour_basic_info_update(_id: $_id, basic_info: $basic_info) {\n      id\n      province\n      city\n      display_location\n      name\n      category\n      duration_in_days\n      price_per_person\n      good_for\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '81b0e2f289172fbfbd31c3deedabebac';
module.exports = node;
