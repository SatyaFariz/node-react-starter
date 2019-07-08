/**
 * @flow
 * @relayHash 0f76e004226085715eca3c75f36db9c9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TourItineraryDeleteAdminMutationVariables = {|
  _id: string
|};
export type TourItineraryDeleteAdminMutationResponse = {|
  +admin: ?{|
    +tour_itinerary_delete: ?{|
      +deleted_id: ?string
    |}
  |}
|};
export type TourItineraryDeleteAdminMutation = {|
  variables: TourItineraryDeleteAdminMutationVariables,
  response: TourItineraryDeleteAdminMutationResponse,
|};
*/


/*
mutation TourItineraryDeleteAdminMutation(
  $_id: String!
) {
  admin {
    tour_itinerary_delete(_id: $_id) {
      deleted_id
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
        "name": "tour_itinerary_delete",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "_id",
            "variableName": "_id"
          }
        ],
        "concreteType": "DeletePayload",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "deleted_id",
            "args": null,
            "storageKey": null
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
    "name": "TourItineraryDeleteAdminMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TourItineraryDeleteAdminMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TourItineraryDeleteAdminMutation",
    "id": null,
    "text": "mutation TourItineraryDeleteAdminMutation(\n  $_id: String!\n) {\n  admin {\n    tour_itinerary_delete(_id: $_id) {\n      deleted_id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '54b4ab42c0576b6b61b466f52caab9d3';
module.exports = node;
