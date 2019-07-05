/**
 * @flow
 * @relayHash ca1a269b0e150600cc288b1d76e0756e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TourKidPriceDeleteAdminMutationVariables = {|
  _id: string
|};
export type TourKidPriceDeleteAdminMutationResponse = {|
  +admin: ?{|
    +tour_kid_price_delete: ?{|
      +id: ?string,
      +kid_price: ?{|
        +price_per_person: ?number,
        +age_description: ?string,
      |},
    |}
  |}
|};
export type TourKidPriceDeleteAdminMutation = {|
  variables: TourKidPriceDeleteAdminMutationVariables,
  response: TourKidPriceDeleteAdminMutationResponse,
|};
*/


/*
mutation TourKidPriceDeleteAdminMutation(
  $_id: String!
) {
  admin {
    tour_kid_price_delete(_id: $_id) {
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
        "name": "tour_kid_price_delete",
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
    "name": "TourKidPriceDeleteAdminMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TourKidPriceDeleteAdminMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TourKidPriceDeleteAdminMutation",
    "id": null,
    "text": "mutation TourKidPriceDeleteAdminMutation(\n  $_id: String!\n) {\n  admin {\n    tour_kid_price_delete(_id: $_id) {\n      id\n      kid_price {\n        price_per_person\n        age_description\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f23f3de243a9939bc5d0b6656a11fbe4';
module.exports = node;
