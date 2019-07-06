/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type MoreTipsEdit_tour$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MoreTips_tour$ref: FragmentReference;
declare export opaque type MoreTips_tour$fragmentType: MoreTips_tour$ref;
export type MoreTips_tour = {|
  +id: ?string,
  +more_tips: ?$ReadOnlyArray<?string>,
  +$fragmentRefs: MoreTipsEdit_tour$ref,
  +$refType: MoreTips_tour$ref,
|};
export type MoreTips_tour$data = MoreTips_tour;
export type MoreTips_tour$key = {
  +$data?: MoreTips_tour$data,
  +$fragmentRefs: MoreTips_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MoreTips_tour",
  "type": "Tour",
  "metadata": null,
  "argumentDefinitions": [],
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
      "name": "more_tips",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "MoreTipsEdit_tour",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '94dd2131cde74a36cccd11aaf11d6680';
module.exports = node;
