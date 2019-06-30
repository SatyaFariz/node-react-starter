/**
 * @flow
 * @relayHash 79133de0f2f876b2706668b74f492ab2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ToursList_loggedAdmin$ref = any;
export type ToursListQueryVariables = {|
  first?: ?number,
  after?: ?string,
|};
export type ToursListQueryResponse = {|
  +logged_admin: ?{|
    +$fragmentRefs: ToursList_loggedAdmin$ref
  |}
|};
export type ToursListQuery = {|
  variables: ToursListQueryVariables,
  response: ToursListQueryResponse,
|};
*/


/*
query ToursListQuery(
  $first: Int
  $after: String
) {
  logged_admin {
    ...ToursList_loggedAdmin_2HEEH6
  }
}

fragment ToursList_loggedAdmin_2HEEH6 on LoggedAdmin {
  tours(first: $first, after: $after) {
    edges {
      cursor
      node {
        id
        __typename
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ToursListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
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
            "name": "ToursList_loggedAdmin",
            "args": (v1/*: any*/)
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ToursListQuery",
    "argumentDefinitions": (v0/*: any*/),
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
            "kind": "LinkedField",
            "alias": null,
            "name": "tours",
            "storageKey": null,
            "args": (v1/*: any*/),
            "concreteType": "TourConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "TourEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
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
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "tours",
            "args": (v1/*: any*/),
            "handle": "connection",
            "key": "ToursList_tours",
            "filters": []
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ToursListQuery",
    "id": null,
    "text": "query ToursListQuery(\n  $first: Int\n  $after: String\n) {\n  logged_admin {\n    ...ToursList_loggedAdmin_2HEEH6\n  }\n}\n\nfragment ToursList_loggedAdmin_2HEEH6 on LoggedAdmin {\n  tours(first: $first, after: $after) {\n    edges {\n      cursor\n      node {\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '09e208b3bf409cfd4f6546df8b6d6f9c';
module.exports = node;
