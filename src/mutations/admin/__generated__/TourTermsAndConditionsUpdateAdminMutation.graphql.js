/**
 * @flow
 * @relayHash c0373d44eeff6bed7b80b64fad579774
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TourTermsAndConditionsUpdateAdminMutationVariables = {|
  _id: string,
  terms_and_conditions: $ReadOnlyArray<string>,
|};
export type TourTermsAndConditionsUpdateAdminMutationResponse = {|
  +admin: ?{|
    +tour_terms_and_conditions_update: ?{|
      +id: ?string,
      +terms_and_conditions: ?$ReadOnlyArray<?string>,
    |}
  |}
|};
export type TourTermsAndConditionsUpdateAdminMutation = {|
  variables: TourTermsAndConditionsUpdateAdminMutationVariables,
  response: TourTermsAndConditionsUpdateAdminMutationResponse,
|};
*/


/*
mutation TourTermsAndConditionsUpdateAdminMutation(
  $_id: String!
  $terms_and_conditions: [String!]!
) {
  admin {
    tour_terms_and_conditions_update(_id: $_id, terms_and_conditions: $terms_and_conditions) {
      id
      terms_and_conditions
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
    "name": "terms_and_conditions",
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
        "name": "tour_terms_and_conditions_update",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "_id",
            "variableName": "_id"
          },
          {
            "kind": "Variable",
            "name": "terms_and_conditions",
            "variableName": "terms_and_conditions"
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
            "name": "terms_and_conditions",
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
    "name": "TourTermsAndConditionsUpdateAdminMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TourTermsAndConditionsUpdateAdminMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TourTermsAndConditionsUpdateAdminMutation",
    "id": null,
    "text": "mutation TourTermsAndConditionsUpdateAdminMutation(\n  $_id: String!\n  $terms_and_conditions: [String!]!\n) {\n  admin {\n    tour_terms_and_conditions_update(_id: $_id, terms_and_conditions: $terms_and_conditions) {\n      id\n      terms_and_conditions\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8ef5db497193769f7fa29b48fa926723';
module.exports = node;
