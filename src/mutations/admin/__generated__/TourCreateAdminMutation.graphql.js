/**
 * @flow
 * @relayHash 66b19b765115ba978ad39916bda44e32
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TourCreateInput = {|
  province: string,
  city: string,
  display_location: string,
  name: string,
  category?: ?string,
  duration_in_days: number,
  price_per_person: number,
  description: string,
  free_cancellation: boolean,
  foods_included?: ?string,
  drinks_included?: ?string,
  accomodations_included?: ?string,
  tickets_included?: ?string,
  transportation_included?: ?string,
  equipment_included?: ?string,
  good_for?: ?string,
|};
export type TourCreateAdminMutationVariables = {|
  input: TourCreateInput
|};
export type TourCreateAdminMutationResponse = {|
  +admin: ?{|
    +tour_create: ?{|
      +id: ?string,
      +name: ?string,
    |}
  |}
|};
export type TourCreateAdminMutation = {|
  variables: TourCreateAdminMutationVariables,
  response: TourCreateAdminMutationResponse,
|};
*/


/*
mutation TourCreateAdminMutation(
  $input: TourCreateInput!
) {
  admin {
    tour_create(input: $input) {
      id
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "TourCreateInput!",
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
        "name": "tour_create",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input"
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
            "name": "name",
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
    "name": "TourCreateAdminMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TourCreateAdminMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TourCreateAdminMutation",
    "id": null,
    "text": "mutation TourCreateAdminMutation(\n  $input: TourCreateInput!\n) {\n  admin {\n    tour_create(input: $input) {\n      id\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ec5c546163b1b20e7b51b2136cdd92d6';
module.exports = node;
