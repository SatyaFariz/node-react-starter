/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type BasicInfo_tour$ref = any;
type Description_tour$ref = any;
type GuestRequirements_tour$ref = any;
type Highlights_tour$ref = any;
type KidPrice_tour$ref = any;
type MoreTips_tour$ref = any;
type PackagePrice_tour$ref = any;
type TermsAndConditions_tour$ref = any;
type WhatsIncluded_tour$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TourDetailPage_tour$ref: FragmentReference;
declare export opaque type TourDetailPage_tour$fragmentType: TourDetailPage_tour$ref;
export type TourDetailPage_tour = {|
  +id: ?string,
  +$fragmentRefs: Description_tour$ref & BasicInfo_tour$ref & WhatsIncluded_tour$ref & KidPrice_tour$ref & PackagePrice_tour$ref & Highlights_tour$ref & GuestRequirements_tour$ref & MoreTips_tour$ref & TermsAndConditions_tour$ref,
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
    },
    {
      "kind": "FragmentSpread",
      "name": "PackagePrice_tour",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Highlights_tour",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "GuestRequirements_tour",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "MoreTips_tour",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "TermsAndConditions_tour",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'dfd3a72bf5e1f489fca0967c6edc7737';
module.exports = node;
