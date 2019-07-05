/**
 * @flow
 * @relayHash aaf92e72851741f84f5f355c2dbe4198
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TourPackagePriceDeleteAdminMutationVariables = {|
  _id: string
|};
export type TourPackagePriceDeleteAdminMutationResponse = {|
  +admin: ?{|
    +tour_package_price_delete: ?{|
      +id: ?string,
      +package_price: ?{|
        +price: ?number,
        +number_of_people: ?number,
      |},
    |}
  |}
|};
export type TourPackagePriceDeleteAdminMutation = {|
  variables: TourPackagePriceDeleteAdminMutationVariables,
  response: TourPackagePriceDeleteAdminMutationResponse,
|};
*/


/*
mutation TourPackagePriceDeleteAdminMutation(
  $_id: String!
) {
  admin {
    tour_package_price_delete(_id: $_id) {
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
    "name": "_id",
    "type": "String!",
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
        "name": "tour_package_price_delete",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "_id",
            "variableName": "_id"
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
    "name": "TourPackagePriceDeleteAdminMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TourPackagePriceDeleteAdminMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TourPackagePriceDeleteAdminMutation",
    "id": null,
    "text": "mutation TourPackagePriceDeleteAdminMutation(\n  $_id: String!\n) {\n  admin {\n    tour_package_price_delete(_id: $_id) {\n      id\n      package_price {\n        price\n        number_of_people\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '397f19d0a8af31e8b9e3fadb16669375';
module.exports = node;
