/**
 * @flow
 * @relayHash 6bcf36f9df8b3289ba10b94639b5f7fd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout_loggedAdmin$ref = any;
type ToursListPage_loggedAdmin$ref = any;
export type toursListPageAdminQueryVariables = {||};
export type toursListPageAdminQueryResponse = {|
  +logged_admin: ?{|
    +$fragmentRefs: Layout_loggedAdmin$ref & ToursListPage_loggedAdmin$ref
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
    ...ToursListPage_loggedAdmin
  }
}

fragment Layout_loggedAdmin on LoggedAdmin {
  id
}

fragment ToursListPage_loggedAdmin on LoggedAdmin {
  id
  ...ToursList_loggedAdmin
}

fragment ToursList_loggedAdmin on LoggedAdmin {
  tours(first: 12) {
    edges {
      cursor
      node {
        id
        ...TourItem_tour
        __typename
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment TourItem_tour on Tour {
  id
  name
  display_image {
    id
    secure_url
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 12
  }
];
return {
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
          },
          {
            "kind": "FragmentSpread",
            "name": "ToursListPage_loggedAdmin",
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
          (v0/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "tours",
            "storageKey": "tours(first:12)",
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
                      (v0/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "display_image",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Image",
                        "plural": false,
                        "selections": [
                          (v0/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "secure_url",
                            "args": null,
                            "storageKey": null
                          }
                        ]
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
    "name": "toursListPageAdminQuery",
    "id": null,
    "text": "query toursListPageAdminQuery {\n  logged_admin {\n    ...Layout_loggedAdmin\n    ...ToursListPage_loggedAdmin\n  }\n}\n\nfragment Layout_loggedAdmin on LoggedAdmin {\n  id\n}\n\nfragment ToursListPage_loggedAdmin on LoggedAdmin {\n  id\n  ...ToursList_loggedAdmin\n}\n\nfragment ToursList_loggedAdmin on LoggedAdmin {\n  tours(first: 12) {\n    edges {\n      cursor\n      node {\n        id\n        ...TourItem_tour\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment TourItem_tour on Tour {\n  id\n  name\n  display_image {\n    id\n    secure_url\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0e3153e527e026b2e43d3667bda56f04';
module.exports = node;
