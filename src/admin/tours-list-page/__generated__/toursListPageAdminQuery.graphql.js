/**
 * @flow
 * @relayHash b785b2ee134088a971e3055ab9022bee
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout_loggedAdmin$ref = any;
export type toursListPageAdminQueryVariables = {||};
export type toursListPageAdminQueryResponse = {|
  +logged_admin: ?{|
    +$fragmentRefs: Layout_loggedAdmin$ref
  |}
|};
export type toursListPageAdminQuery = {|
  variables: toursListPageAdminQueryVariables,
  response: toursListPageAdminQueryResponse,
|};
*/


/*
query toursListPageAdminQuery {
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
    "name": "toursListPageAdminQuery",
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
    "name": "toursListPageAdminQuery",
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
    "name": "toursListPageAdminQuery",
    "id": null,
    "text": "query toursListPageAdminQuery {\n  logged_admin {\n    ...Layout_loggedAdmin\n  }\n}\n\nfragment Layout_loggedAdmin on LoggedAdmin {\n  id\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '86f86d2fb1580389a48a63dc7fd96219';
module.exports = node;
