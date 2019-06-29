/**
 * @flow
 * @relayHash 53e30a5c417179ab449a51e472767802
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserTypeEnum = "admin" | "regular_user" | "%future added value";
export type SignInInput = {|
  username_or_email: string,
  password: string,
  user_type: UserTypeEnum,
|};
export type SignInMutationVariables = {|
  input: SignInInput
|};
export type SignInMutationResponse = {|
  +sign_in: ?{|
    +success: ?boolean,
    +message: ?string,
  |}
|};
export type SignInMutation = {|
  variables: SignInMutationVariables,
  response: SignInMutationResponse,
|};
*/


/*
mutation SignInMutation(
  $input: SignInInput!
) {
  sign_in(input: $input) {
    success
    message
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SignInInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "sign_in",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
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
    "name": "SignInMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SignInMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SignInMutation",
    "id": null,
    "text": "mutation SignInMutation(\n  $input: SignInInput!\n) {\n  sign_in(input: $input) {\n    success\n    message\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c744a48fcc2a096353619269ee197889';
module.exports = node;
