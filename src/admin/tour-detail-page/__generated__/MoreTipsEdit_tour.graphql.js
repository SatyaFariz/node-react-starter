/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MoreTipsEdit_tour$ref: FragmentReference;
declare export opaque type MoreTipsEdit_tour$fragmentType: MoreTipsEdit_tour$ref;
export type MoreTipsEdit_tour = {|
  +tourID: ?string,
  +more_tips: ?$ReadOnlyArray<?string>,
  +$refType: MoreTipsEdit_tour$ref,
|};
export type MoreTipsEdit_tour$data = MoreTipsEdit_tour;
export type MoreTipsEdit_tour$key = {
  +$data?: MoreTipsEdit_tour$data,
  +$fragmentRefs: MoreTipsEdit_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MoreTipsEdit_tour",
  "type": "Tour",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "tourID",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "more_tips",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd0b7f0e1ac1269f5615b09597f46a0a1';
module.exports = node;
