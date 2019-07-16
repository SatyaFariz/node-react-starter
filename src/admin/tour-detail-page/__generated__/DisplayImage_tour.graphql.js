/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DisplayImage_tour$ref: FragmentReference;
declare export opaque type DisplayImage_tour$fragmentType: DisplayImage_tour$ref;
export type DisplayImage_tour = {|
  +id: ?string,
  +display_image: ?{|
    +id: ?string,
    +secure_url: ?string,
  |},
  +$refType: DisplayImage_tour$ref,
|};
export type DisplayImage_tour$data = DisplayImage_tour;
export type DisplayImage_tour$key = {
  +$data?: DisplayImage_tour$data,
  +$fragmentRefs: DisplayImage_tour$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "DisplayImage_tour",
  "type": "Tour",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "display_image",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "secure_url",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e3ed5fae680f7ec52288815dbeab2f27';
module.exports = node;
