/**
 * @flow
 * @relayHash c2124e29e3574da6d3df1511bb977ef8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HomePage_loggedAdmin$ref = any;
type Layout_loggedAdmin$ref = any;
export type homePageAdminQueryVariables = {||};
export type homePageAdminQueryResponse = {|
  +logged_admin: ?{|
    +$fragmentRefs: Layout_loggedAdmin$ref & HomePage_loggedAdmin$ref
  |}
|};
export type homePageAdminQuery = {|
  variables: homePageAdminQueryVariables,
  response: homePageAdminQueryResponse,
|};
*/


/*
query homePageAdminQuery {
  logged_admin {
    ...Layout_loggedAdmin
    ...HomePage_loggedAdmin
  }
}

fragment Layout_loggedAdmin on LoggedAdmin {
  id
}

fragment HomePage_loggedAdmin on LoggedAdmin {
  id
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "homePageAdminQuery",
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
          },
          {
            "kind": "FragmentSpread",
            "name": "HomePage_loggedAdmin",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "homePageAdminQuery",
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
    "name": "homePageAdminQuery",
    "id": null,
    "text": "query homePageAdminQuery {\n  logged_admin {\n    ...Layout_loggedAdmin\n    ...HomePage_loggedAdmin\n  }\n}\n\nfragment Layout_loggedAdmin on LoggedAdmin {\n  id\n}\n\nfragment HomePage_loggedAdmin on LoggedAdmin {\n  id\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'aefd45a2b5e945f10fee83afd21cdd4f';
module.exports = node;
