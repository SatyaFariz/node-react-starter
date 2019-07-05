/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type HighlightsEdit_tour$ref: FragmentReference;
declare export opaque type HighlightsEdit_tour$fragmentType: HighlightsEdit_tour$ref;
export type HighlightsEdit_tour = {|
  +tourID: ?string,
  +highlights: ?$ReadOnlyArray<?string>,
  +$refType: HighlightsEdit_tour$ref,
|};
export type HighlightsEdit_tour$data = HighlightsEdit_tour;
export type HighlightsEdit_tour$key = {
  +$data?: HighlightsEdit_tour$data,
  +$fragmentRefs: HighlightsEdit_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "HighlightsEdit_tour",
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
      "name": "highlights",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '7cbf010152c2f2d22a3dc9167940661d';
module.exports = node;
