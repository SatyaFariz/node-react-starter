/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DescriptionEdit_tour$ref: FragmentReference;
declare export opaque type DescriptionEdit_tour$fragmentType: DescriptionEdit_tour$ref;
export type DescriptionEdit_tour = {|
  +tourID: ?string,
  +description: ?string,
  +$refType: DescriptionEdit_tour$ref,
|};
export type DescriptionEdit_tour$data = DescriptionEdit_tour;
export type DescriptionEdit_tour$key = {
  +$data?: DescriptionEdit_tour$data,
  +$fragmentRefs: DescriptionEdit_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "DescriptionEdit_tour",
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
      "name": "description",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e830759c63f13421e8f652f38f47da81';
module.exports = node;
