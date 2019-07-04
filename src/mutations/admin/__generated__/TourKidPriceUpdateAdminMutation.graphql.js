/**
 * @flow
 * @relayHash 447a65561c140586103fbff121d9c0a7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TourKidPriceInput = {|
  price_per_person: number,
  age_description: string,
|};
export type TourKidPriceUpdateAdminMutationVariables = {|
  kid_price: TourKidPriceInput
|};
export type TourKidPriceUpdateAdminMutationResponse = {|
  +admin: ?{|
    +tour_kid_price_update: ?{|
      +id: ?string,
      +kid_price: ?{|
        +price_per_person: ?number,
        +age_description: ?string,
      |},
    |}
  |}
|};
export type TourKidPriceUpdateAdminMutation = {|
  variables: TourKidPriceUpdateAdminMutationVariables,
  response: TourKidPriceUpdateAdminMutationResponse,
|};
*/


/*
mutation TourKidPriceUpdateAdminMutation(
  $kid_price: TourKidPriceInput!
) {
  admin {
    tour_kid_price_update(kid_price: $kid_price) {
      id
      kid_price {
        price_per_person
        age_description
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "kid_price",
    "type": "TourKidPriceInput!",
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
        "name": "tour_kid_price_update",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "kid_price",
            "variableName": "kid_price"
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
            "kind": "LinkedField",
            "alias": null,
            "name": "kid_price",
            "storageKey": null,
            "args": null,
            "concreteType": "TourKidPrice",
            "plural": false,
            "selections": [
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
                "name": "age_description",
                "args": null,
                "storageKey": null
              }
            ]
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
    "name": "TourKidPriceUpdateAdminMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TourKidPriceUpdateAdminMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TourKidPriceUpdateAdminMutation",
    "id": null,
    "text": "mutation TourKidPriceUpdateAdminMutation(\n  $kid_price: TourKidPriceInput!\n) {\n  admin {\n    tour_kid_price_update(kid_price: $kid_price) {\n      id\n      kid_price {\n        price_per_person\n        age_description\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c54e346832fb07a6e31f70b9c9563466';
module.exports = node;
