/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type HomePage_loggedAdmin$ref: FragmentReference;
declare export opaque type HomePage_loggedAdmin$fragmentType: HomePage_loggedAdmin$ref;
export type HomePage_loggedAdmin = {|
  +id: ?string,
  +$refType: HomePage_loggedAdmin$ref,
|};
export type HomePage_loggedAdmin$data = HomePage_loggedAdmin;
export type HomePage_loggedAdmin$key = {
  +$data?: HomePage_loggedAdmin$data,
  +$fragmentRefs: HomePage_loggedAdmin$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "HomePage_loggedAdmin",
  "type": "LoggedAdmin",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'c13b3694c77bd9c949a98616eed8df03';
module.exports = node;
