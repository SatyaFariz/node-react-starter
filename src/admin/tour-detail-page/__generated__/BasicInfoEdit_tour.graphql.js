/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type BasicInfoEdit_tour$ref: FragmentReference;
declare export opaque type BasicInfoEdit_tour$fragmentType: BasicInfoEdit_tour$ref;
export type BasicInfoEdit_tour = {|
  +tourID: ?string,
  +province: ?string,
  +city: ?string,
  +display_location: ?string,
  +free_cancellation: ?boolean,
  +name: ?string,
  +category: ?string,
  +duration_in_days: ?number,
  +price_per_person: ?number,
  +good_for: ?string,
  +$refType: BasicInfoEdit_tour$ref,
|};
export type BasicInfoEdit_tour$data = BasicInfoEdit_tour;
export type BasicInfoEdit_tour$key = {
  +$data?: BasicInfoEdit_tour$data,
  +$fragmentRefs: BasicInfoEdit_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "BasicInfoEdit_tour",
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
      "name": "free_cancellation",
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '0327b7c7da263e07670045f976e0fe93';
module.exports = node;
