/**
 * @flow
 * @relayHash c7996c5a001fecf6a78cd937b7cb7c4f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TourPackagePriceInput = {|
  price: number,
  number_of_people: number,
|};
export type TourPackagePriceUpdateAdminMutationVariables = {|
  package_price: TourPackagePriceInput
|};
export type TourPackagePriceUpdateAdminMutationResponse = {|
  +admin: ?{|
    +tour_package_price_update: ?{|
      +id: ?string,
      +package_price: ?{|
        +price: ?number,
        +number_of_people: ?number,
      |},
    |}
  |}
|};
export type TourPackagePriceUpdateAdminMutation = {|
  variables: TourPackagePriceUpdateAdminMutationVariables,
  response: TourPackagePriceUpdateAdminMutationResponse,
|};
*/


/*
mutation TourPackagePriceUpdateAdminMutation(
  $package_price: TourPackagePriceInput!
) {
  admin {
    tour_package_price_update(package_price: $package_price) {
      id
      package_price {
        price
        number_of_people
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "package_price",
    "type": "TourPackagePriceInput!",
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
        "name": "tour_package_price_update",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "package_price",
            "variableName": "package_price"
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
            "name": "package_price",
            "storageKey": null,
            "args": null,
            "concreteType": "TourPackagePrice",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "price",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "number_of_people",
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
    "name": "TourPackagePriceUpdateAdminMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TourPackagePriceUpdateAdminMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TourPackagePriceUpdateAdminMutation",
    "id": null,
    "text": "mutation TourPackagePriceUpdateAdminMutation(\n  $package_price: TourPackagePriceInput!\n) {\n  admin {\n    tour_package_price_update(package_price: $package_price) {\n      id\n      package_price {\n        price\n        number_of_people\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '782bd0c79f8aa7b911a706598a1ceb8c';
module.exports = node;
