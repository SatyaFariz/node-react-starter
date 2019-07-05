/**
 * @flow
 * @relayHash fc64faecbc95f24d637844d53875b6be
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TourMoreTipsUpdateAdminMutationVariables = {|
  _id: string,
  more_tips: $ReadOnlyArray<string>,
|};
export type TourMoreTipsUpdateAdminMutationResponse = {|
  +admin: ?{|
    +tour_more_tips_update: ?{|
      +id: ?string,
      +more_tips: ?$ReadOnlyArray<?string>,
    |}
  |}
|};
export type TourMoreTipsUpdateAdminMutation = {|
  variables: TourMoreTipsUpdateAdminMutationVariables,
  response: TourMoreTipsUpdateAdminMutationResponse,
|};
*/


/*
mutation TourMoreTipsUpdateAdminMutation(
  $_id: String!
  $more_tips: [String!]!
) {
  admin {
    tour_more_tips_update(_id: $_id, more_tips: $more_tips) {
      id
      more_tips
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
    "name": "more_tips",
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
        "name": "tour_more_tips_update",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "_id",
            "variableName": "_id"
          },
          {
            "kind": "Variable",
            "name": "more_tips",
            "variableName": "more_tips"
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
            "name": "more_tips",
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
    "name": "TourMoreTipsUpdateAdminMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TourMoreTipsUpdateAdminMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TourMoreTipsUpdateAdminMutation",
    "id": null,
    "text": "mutation TourMoreTipsUpdateAdminMutation(\n  $_id: String!\n  $more_tips: [String!]!\n) {\n  admin {\n    tour_more_tips_update(_id: $_id, more_tips: $more_tips) {\n      id\n      more_tips\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'edea94c8f5fc829df8200fb42b8465c4';
module.exports = node;
