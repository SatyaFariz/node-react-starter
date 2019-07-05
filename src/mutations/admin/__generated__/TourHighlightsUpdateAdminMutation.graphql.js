/**
 * @flow
 * @relayHash d860de4811fce580fe657a70edda0450
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TourHighlightsUpdateAdminMutationVariables = {|
  _id: string,
  highlights: $ReadOnlyArray<string>,
|};
export type TourHighlightsUpdateAdminMutationResponse = {|
  +admin: ?{|
    +tour_highlights_update: ?{|
      +id: ?string,
      +highlights: ?$ReadOnlyArray<?string>,
    |}
  |}
|};
export type TourHighlightsUpdateAdminMutation = {|
  variables: TourHighlightsUpdateAdminMutationVariables,
  response: TourHighlightsUpdateAdminMutationResponse,
|};
*/


/*
mutation TourHighlightsUpdateAdminMutation(
  $_id: String!
  $highlights: [String!]!
) {
  admin {
    tour_highlights_update(_id: $_id, highlights: $highlights) {
      id
      highlights
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
    "name": "highlights",
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
        "name": "tour_highlights_update",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "_id",
            "variableName": "_id"
          },
          {
            "kind": "Variable",
            "name": "highlights",
            "variableName": "highlights"
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
            "name": "highlights",
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
    "name": "TourHighlightsUpdateAdminMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TourHighlightsUpdateAdminMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TourHighlightsUpdateAdminMutation",
    "id": null,
    "text": "mutation TourHighlightsUpdateAdminMutation(\n  $_id: String!\n  $highlights: [String!]!\n) {\n  admin {\n    tour_highlights_update(_id: $_id, highlights: $highlights) {\n      id\n      highlights\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e12e226e112c4ea6b321e6b68fd48c70';
module.exports = node;
