/**
 * @flow
 * @relayHash a2e50b1e0021e247e042461c59d50779
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TourCancellationPolicyUpdateAdminMutationVariables = {|
  _id: string,
  cancellation_policy: $ReadOnlyArray<string>,
|};
export type TourCancellationPolicyUpdateAdminMutationResponse = {|
  +admin: ?{|
    +tour_cancellation_policy_update: ?{|
      +id: ?string,
      +cancellation_policy: ?$ReadOnlyArray<?string>,
    |}
  |}
|};
export type TourCancellationPolicyUpdateAdminMutation = {|
  variables: TourCancellationPolicyUpdateAdminMutationVariables,
  response: TourCancellationPolicyUpdateAdminMutationResponse,
|};
*/


/*
mutation TourCancellationPolicyUpdateAdminMutation(
  $_id: String!
  $cancellation_policy: [String!]!
) {
  admin {
    tour_cancellation_policy_update(_id: $_id, cancellation_policy: $cancellation_policy) {
      id
      cancellation_policy
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
    "name": "cancellation_policy",
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
        "name": "tour_cancellation_policy_update",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "_id",
            "variableName": "_id"
          },
          {
            "kind": "Variable",
            "name": "cancellation_policy",
            "variableName": "cancellation_policy"
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
            "name": "cancellation_policy",
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
    "name": "TourCancellationPolicyUpdateAdminMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TourCancellationPolicyUpdateAdminMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TourCancellationPolicyUpdateAdminMutation",
    "id": null,
    "text": "mutation TourCancellationPolicyUpdateAdminMutation(\n  $_id: String!\n  $cancellation_policy: [String!]!\n) {\n  admin {\n    tour_cancellation_policy_update(_id: $_id, cancellation_policy: $cancellation_policy) {\n      id\n      cancellation_policy\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7de5d4773971a9efbfd9815fd5ade667';
module.exports = node;
