/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type DescriptionEdit_tour$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Description_tour$ref: FragmentReference;
declare export opaque type Description_tour$fragmentType: Description_tour$ref;
export type Description_tour = {|
  +id: ?string,
  +description: ?string,
  +$fragmentRefs: DescriptionEdit_tour$ref,
  +$refType: Description_tour$ref,
|};
export type Description_tour$data = Description_tour;
export type Description_tour$key = {
  +$data?: Description_tour$data,
  +$fragmentRefs: Description_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Description_tour",
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
      "name": "description",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "DescriptionEdit_tour",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd41762f70c8e1bf021f949ce97372f69';
module.exports = node;
