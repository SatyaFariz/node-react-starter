/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItineraryCreateForm_tour$ref: FragmentReference;
declare export opaque type ItineraryCreateForm_tour$fragmentType: ItineraryCreateForm_tour$ref;
export type ItineraryCreateForm_tour = {|
  +id: ?string,
  +$refType: ItineraryCreateForm_tour$ref,
|};
export type ItineraryCreateForm_tour$data = ItineraryCreateForm_tour;
export type ItineraryCreateForm_tour$key = {
  +$data?: ItineraryCreateForm_tour$data,
  +$fragmentRefs: ItineraryCreateForm_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ItineraryCreateForm_tour",
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
(node/*: any*/).hash = '7e73d7ea1205d68d0879fb8b48de5add';
module.exports = node;
