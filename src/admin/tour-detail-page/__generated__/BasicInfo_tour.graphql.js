/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type BasicInfoEdit_tour$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BasicInfo_tour$ref: FragmentReference;
declare export opaque type BasicInfo_tour$fragmentType: BasicInfo_tour$ref;
export type BasicInfo_tour = {|
  +id: ?string,
  +province: ?string,
  +city: ?string,
  +display_location: ?string,
  +name: ?string,
  +category: ?string,
  +duration_in_days: ?number,
  +price_per_person: ?number,
  +good_for: ?string,
  +$fragmentRefs: BasicInfoEdit_tour$ref,
  +$refType: BasicInfo_tour$ref,
|};
export type BasicInfo_tour$data = BasicInfo_tour;
export type BasicInfo_tour$key = {
  +$data?: BasicInfo_tour$data,
  +$fragmentRefs: BasicInfo_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "BasicInfo_tour",
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
      "name": "province",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "city",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "display_location",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "category",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "duration_in_days",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "price_per_person",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "good_for",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "BasicInfoEdit_tour",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b5d119fe3af426a84e4ba0b56d4072f1';
module.exports = node;
