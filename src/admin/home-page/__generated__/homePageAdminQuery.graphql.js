/**
 * @flow
 * @relayHash 6ce1e8c3f4b03dbbbd61c055922e48b6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HomePage_loggedAdmin$ref = any;
export type homePageAdminQueryVariables = {||};
export type homePageAdminQueryResponse = {|
  +logged_admin: ?{|
    +$fragmentRefs: HomePage_loggedAdmin$ref
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
    ...HomePage_loggedAdmin
  }
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
    "text": "query homePageAdminQuery {\n  logged_admin {\n    ...HomePage_loggedAdmin\n  }\n}\n\nfragment HomePage_loggedAdmin on LoggedAdmin {\n  id\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '3f53d6c06a9b22f2c0c90db42cc12cc3';
module.exports = node;
