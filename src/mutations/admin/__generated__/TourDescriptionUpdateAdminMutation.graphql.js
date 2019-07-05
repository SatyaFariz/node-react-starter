/**
 * @flow
 * @relayHash 011293d363692afd2c12c933b553ce4b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TourDescriptionUpdateAdminMutationVariables = {|
  _id: string,
  description: string,
|};
export type TourDescriptionUpdateAdminMutationResponse = {|
  +admin: ?{|
    +tour_description_update: ?{|
      +id: ?string,
      +description: ?string,
    |}
  |}
|};
export type TourDescriptionUpdateAdminMutation = {|
  variables: TourDescriptionUpdateAdminMutationVariables,
  response: TourDescriptionUpdateAdminMutationResponse,
|};
*/


/*
mutation TourDescriptionUpdateAdminMutation(
  $_id: String!
  $description: String!
) {
  admin {
    tour_description_update(_id: $_id, description: $description) {
      id
      description
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
    "name": "description",
    "type": "String!",
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
        "name": "tour_description_update",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "_id",
            "variableName": "_id"
          },
          {
            "kind": "Variable",
            "name": "description",
            "variableName": "description"
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
            "name": "description",
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
    "name": "TourDescriptionUpdateAdminMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TourDescriptionUpdateAdminMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TourDescriptionUpdateAdminMutation",
    "id": null,
    "text": "mutation TourDescriptionUpdateAdminMutation(\n  $_id: String!\n  $description: String!\n) {\n  admin {\n    tour_description_update(_id: $_id, description: $description) {\n      id\n      description\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8b926216d0ec9bfb126b3b9a4550fcb0';
module.exports = node;
