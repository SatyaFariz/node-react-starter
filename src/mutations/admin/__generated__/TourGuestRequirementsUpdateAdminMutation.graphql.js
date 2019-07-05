/**
 * @flow
 * @relayHash 466129f5c1d9ca25920addeeea751786
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TourGuestRequirementsUpdateAdminMutationVariables = {|
  _id: string,
  guest_requirements: $ReadOnlyArray<string>,
|};
export type TourGuestRequirementsUpdateAdminMutationResponse = {|
  +admin: ?{|
    +tour_guest_requirements_update: ?{|
      +id: ?string,
      +guest_requirements: ?$ReadOnlyArray<?string>,
    |}
  |}
|};
export type TourGuestRequirementsUpdateAdminMutation = {|
  variables: TourGuestRequirementsUpdateAdminMutationVariables,
  response: TourGuestRequirementsUpdateAdminMutationResponse,
|};
*/


/*
mutation TourGuestRequirementsUpdateAdminMutation(
  $_id: String!
  $guest_requirements: [String!]!
) {
  admin {
    tour_guest_requirements_update(_id: $_id, guest_requirements: $guest_requirements) {
      id
      guest_requirements
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
    "name": "guest_requirements",
    "type": "[String!]!",
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
        "name": "tour_guest_requirements_update",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "_id",
            "variableName": "_id"
          },
          {
            "kind": "Variable",
            "name": "guest_requirements",
            "variableName": "guest_requirements"
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
            "name": "guest_requirements",
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
    "name": "TourGuestRequirementsUpdateAdminMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TourGuestRequirementsUpdateAdminMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TourGuestRequirementsUpdateAdminMutation",
    "id": null,
    "text": "mutation TourGuestRequirementsUpdateAdminMutation(\n  $_id: String!\n  $guest_requirements: [String!]!\n) {\n  admin {\n    tour_guest_requirements_update(_id: $_id, guest_requirements: $guest_requirements) {\n      id\n      guest_requirements\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0882dbd2769fb6b063ee9b4a262fdab7';
module.exports = node;
