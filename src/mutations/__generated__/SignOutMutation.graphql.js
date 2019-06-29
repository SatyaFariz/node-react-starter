/**
 * @flow
 * @relayHash aa20285605c7c1a909999a6be46d201d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserTypeEnum = "admin" | "regular_user" | "%future added value";
export type SignOutMutationVariables = {|
  user_type: UserTypeEnum
|};
export type SignOutMutationResponse = {|
  +sign_out: ?{|
    +success: ?boolean,
    +message: ?string,
  |}
|};
export type SignOutMutation = {|
  variables: SignOutMutationVariables,
  response: SignOutMutationResponse,
|};
*/


/*
mutation SignOutMutation(
  $user_type: UserTypeEnum!
) {
  sign_out(user_type: $user_type) {
    success
    message
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "user_type",
    "type": "UserTypeEnum!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "sign_out",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "user_type",
        "variableName": "user_type"
      }
    ],
    "concreteType": "ActionInfo",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "success",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "message",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SignOutMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SignOutMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SignOutMutation",
    "id": null,
    "text": "mutation SignOutMutation(\n  $user_type: UserTypeEnum!\n) {\n  sign_out(user_type: $user_type) {\n    success\n    message\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2ad8c063962f45b2028ae42c507e3ce8';
module.exports = node;
