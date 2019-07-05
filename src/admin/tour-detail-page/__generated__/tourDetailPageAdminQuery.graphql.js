/**
 * @flow
 * @relayHash cbbdfec0e631759183c3332c15062dfd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout_loggedAdmin$ref = any;
type TourDetailPage_tour$ref = any;
export type tourDetailPageAdminQueryVariables = {|
  tourID: string
|};
export type tourDetailPageAdminQueryResponse = {|
  +logged_admin: ?{|
    +tour: ?{|
      +$fragmentRefs: TourDetailPage_tour$ref
    |},
    +$fragmentRefs: Layout_loggedAdmin$ref,
  |}
|};
export type tourDetailPageAdminQuery = {|
  variables: tourDetailPageAdminQueryVariables,
  response: tourDetailPageAdminQueryResponse,
|};
*/


/*
query tourDetailPageAdminQuery(
  $tourID: String!
) {
  logged_admin {
    ...Layout_loggedAdmin
    tour(tourID: $tourID) {
      ...TourDetailPage_tour
    }
  }
}

fragment Layout_loggedAdmin on LoggedAdmin {
  id
}

fragment TourDetailPage_tour on Tour {
  id
  ...Description_tour
  ...BasicInfo_tour
}

fragment Description_tour on Tour {
  id
  description
  ...DescriptionEdit_tour
}

fragment BasicInfo_tour on Tour {
  id
  province
  city
  display_location
  name
  category
  duration_in_days
  price_per_person
  good_for
  ...BasicInfoEdit_tour
}

fragment BasicInfoEdit_tour on Tour {
  tourID
  province
  city
  display_location
  name
  category
  duration_in_days
  price_per_person
  good_for
}

fragment DescriptionEdit_tour on Tour {
  tourID
  description
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "tourID",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "tourID",
    "variableName": "tourID"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "tourDetailPageAdminQuery",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "tour",
            "storageKey": null,
            "args": (v1/*: any*/),
            "concreteType": "Tour",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "TourDetailPage_tour",
                "args": null
              }
            ]
          },
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
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "tour",
            "storageKey": null,
            "args": (v1/*: any*/),
            "concreteType": "Tour",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "description",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "tourID",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "province",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "city",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "display_location",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "category",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "duration_in_days",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "price_per_person",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "good_for",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "tourDetailPageAdminQuery",
    "id": null,
    "text": "query tourDetailPageAdminQuery(\n  $tourID: String!\n) {\n  logged_admin {\n    ...Layout_loggedAdmin\n    tour(tourID: $tourID) {\n      ...TourDetailPage_tour\n    }\n  }\n}\n\nfragment Layout_loggedAdmin on LoggedAdmin {\n  id\n}\n\nfragment TourDetailPage_tour on Tour {\n  id\n  ...Description_tour\n  ...BasicInfo_tour\n}\n\nfragment Description_tour on Tour {\n  id\n  description\n  ...DescriptionEdit_tour\n}\n\nfragment BasicInfo_tour on Tour {\n  id\n  province\n  city\n  display_location\n  name\n  category\n  duration_in_days\n  price_per_person\n  good_for\n  ...BasicInfoEdit_tour\n}\n\nfragment BasicInfoEdit_tour on Tour {\n  tourID\n  province\n  city\n  display_location\n  name\n  category\n  duration_in_days\n  price_per_person\n  good_for\n}\n\nfragment DescriptionEdit_tour on Tour {\n  tourID\n  description\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '70b6244226e85fb5131dec5056cbe011';
module.exports = node;
