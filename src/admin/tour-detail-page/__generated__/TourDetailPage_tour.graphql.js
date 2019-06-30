/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TourDetailPage_tour$ref: FragmentReference;
declare export opaque type TourDetailPage_tour$fragmentType: TourDetailPage_tour$ref;
export type TourDetailPage_tour = {|
  +id: ?string,
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4d5bb64693674e5ab16c51885fb42916';
module.exports = node;
