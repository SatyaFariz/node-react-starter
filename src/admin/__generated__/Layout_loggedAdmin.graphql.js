/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Layout_loggedAdmin$ref: FragmentReference;
declare export opaque type Layout_loggedAdmin$fragmentType: Layout_loggedAdmin$ref;
export type Layout_loggedAdmin = {|
  +id: ?string,
  +$refType: Layout_loggedAdmin$ref,
|};
export type Layout_loggedAdmin$data = Layout_loggedAdmin;
export type Layout_loggedAdmin$key = {
  +$data?: Layout_loggedAdmin$data,
  +$fragmentRefs: Layout_loggedAdmin$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Layout_loggedAdmin",
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
(node/*: any*/).hash = '75f73241de757703ec81d24589156c65';
module.exports = node;
