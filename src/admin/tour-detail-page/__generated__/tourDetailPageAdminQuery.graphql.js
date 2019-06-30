/**
 * @flow
 * @relayHash 4bd1f84b3f1cdfe943d0766c0062d8f1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout_loggedAdmin$ref = any;
export type tourDetailPageAdminQueryVariables = {||};
export type tourDetailPageAdminQueryResponse = {|
  +logged_admin: ?{|
    +$fragmentRefs: Layout_loggedAdmin$ref
  |}
|};
export type tourDetailPageAdminQuery = {|
  variables: tourDetailPageAdminQueryVariables,
  response: tourDetailPageAdminQueryResponse,
|};
*/


/*
query tourDetailPageAdminQuery {
  logged_admin {
    ...Layout_loggedAdmin
  }
}

fragment Layout_loggedAdmin on LoggedAdmin {
  id
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "tourDetailPageAdminQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "logged_admin",
        "storageKey": null,
        "args": null,
        "concreteType": "LoggedAdmin",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Layout_loggedAdmin",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "tourDetailPageAdminQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "logged_admin",
        "storageKey": null,
        "args": null,
        "concreteType": "LoggedAdmin",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "tourDetailPageAdminQuery",
    "id": null,
    "text": "query tourDetailPageAdminQuery {\n  logged_admin {\n    ...Layout_loggedAdmin\n  }\n}\n\nfragment Layout_loggedAdmin on LoggedAdmin {\n  id\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '75997ba8e8c03a113d6d7dc0f72d3ad0';
module.exports = node;
