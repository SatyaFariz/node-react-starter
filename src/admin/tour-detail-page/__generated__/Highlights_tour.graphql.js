/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type HighlightsEdit_tour$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Highlights_tour$ref: FragmentReference;
declare export opaque type Highlights_tour$fragmentType: Highlights_tour$ref;
export type Highlights_tour = {|
  +id: ?string,
  +highlights: ?$ReadOnlyArray<?string>,
  +$fragmentRefs: HighlightsEdit_tour$ref,
  +$refType: Highlights_tour$ref,
|};
export type Highlights_tour$data = Highlights_tour;
export type Highlights_tour$key = {
  +$data?: Highlights_tour$data,
  +$fragmentRefs: Highlights_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Highlights_tour",
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
      "name": "highlights",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "HighlightsEdit_tour",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3df3c33bfb81f1846b279225ec0e09b8';
module.exports = node;
