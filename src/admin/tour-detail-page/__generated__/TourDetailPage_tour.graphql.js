/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type BasicInfo_tour$ref = any;
type Description_tour$ref = any;
type KidPrice_tour$ref = any;
type WhatsIncluded_tour$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TourDetailPage_tour$ref: FragmentReference;
declare export opaque type TourDetailPage_tour$fragmentType: TourDetailPage_tour$ref;
export type TourDetailPage_tour = {|
  +id: ?string,
  +$fragmentRefs: Description_tour$ref & BasicInfo_tour$ref & WhatsIncluded_tour$ref & KidPrice_tour$ref,
  +$refType: TourDetailPage_tour$ref,
|};
export type TourDetailPage_tour$data = TourDetailPage_tour;
export type TourDetailPage_tour$key = {
  +$data?: TourDetailPage_tour$data,
  +$fragmentRefs: TourDetailPage_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TourDetailPage_tour",
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
      "kind": "FragmentSpread",
      "name": "Description_tour",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "BasicInfo_tour",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "WhatsIncluded_tour",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "KidPrice_tour",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b51c9d069fb47ca68e086a40c7224ca2';
module.exports = node;
