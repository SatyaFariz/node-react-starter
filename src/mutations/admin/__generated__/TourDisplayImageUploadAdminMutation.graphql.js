/**
 * @flow
 * @relayHash 5190fd4fc9aa8dc4adef823c7f5cd799
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TourDisplayImageUploadAdminMutationVariables = {|
  _id: string
|};
export type TourDisplayImageUploadAdminMutationResponse = {|
  +admin: ?{|
    +tour_display_image_upload: ?{|
      +id: ?string,
      +secure_url: ?string,
    |}
  |}
|};
export type TourDisplayImageUploadAdminMutation = {|
  variables: TourDisplayImageUploadAdminMutationVariables,
  response: TourDisplayImageUploadAdminMutationResponse,
|};
*/


/*
mutation TourDisplayImageUploadAdminMutation(
  $_id: String!
) {
  admin {
    tour_display_image_upload(_id: $_id) {
      id
      secure_url
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
        "name": "tour_display_image_upload",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "_id",
            "variableName": "_id"
          }
        ],
        "concreteType": "Image",
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
            "name": "secure_url",
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
    "name": "TourDisplayImageUploadAdminMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TourDisplayImageUploadAdminMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TourDisplayImageUploadAdminMutation",
    "id": null,
    "text": "mutation TourDisplayImageUploadAdminMutation(\n  $_id: String!\n) {\n  admin {\n    tour_display_image_upload(_id: $_id) {\n      id\n      secure_url\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a9cafc0413833da285ba1dfc2d126a9e';
module.exports = node;
