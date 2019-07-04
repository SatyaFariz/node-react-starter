/**
 * @flow
 * @relayHash 0199010fb4fb2e04ee1fc8abf23f92ae
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TourWhatsIncludedInput = {|
  foods_included?: ?string,
  drinks_included?: ?string,
  accomodations_included?: ?string,
  tickets_included?: ?string,
  transportation_included?: ?string,
  equipment_included?: ?string,
|};
export type TourWhatsIncludedUpdateAdminMutationVariables = {|
  whats_included: TourWhatsIncludedInput
|};
export type TourWhatsIncludedUpdateAdminMutationResponse = {|
  +admin: ?{|
    +tour_whats_included_update: ?{|
      +id: ?string,
      +foods_included: ?string,
      +drinks_included: ?string,
      +transportation_included: ?string,
      +equipment_included: ?string,
      +tickets_included: ?string,
      +accomodations_included: ?string,
    |}
  |}
|};
export type TourWhatsIncludedUpdateAdminMutation = {|
  variables: TourWhatsIncludedUpdateAdminMutationVariables,
  response: TourWhatsIncludedUpdateAdminMutationResponse,
|};
*/


/*
mutation TourWhatsIncludedUpdateAdminMutation(
  $whats_included: TourWhatsIncludedInput!
) {
  admin {
    tour_whats_included_update(whats_included: $whats_included) {
      id
      foods_included
      drinks_included
      transportation_included
      equipment_included
      tickets_included
      accomodations_included
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "whats_included",
    "type": "TourWhatsIncludedInput!",
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
        "name": "tour_whats_included_update",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "whats_included",
            "variableName": "whats_included"
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
            "kind": "ScalarField",
            "alias": null,
            "name": "tickets_included",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "accomodations_included",
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
    "name": "TourWhatsIncludedUpdateAdminMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TourWhatsIncludedUpdateAdminMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TourWhatsIncludedUpdateAdminMutation",
    "id": null,
    "text": "mutation TourWhatsIncludedUpdateAdminMutation(\n  $whats_included: TourWhatsIncludedInput!\n) {\n  admin {\n    tour_whats_included_update(whats_included: $whats_included) {\n      id\n      foods_included\n      drinks_included\n      transportation_included\n      equipment_included\n      tickets_included\n      accomodations_included\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b2a97be9abb1fed6fcae6c5d41e41b47';
module.exports = node;
