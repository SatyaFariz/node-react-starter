/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TourItem_tour$ref: FragmentReference;
declare export opaque type TourItem_tour$fragmentType: TourItem_tour$ref;
export type TourItem_tour = {|
  +id: ?string,
  +name: ?string,
  +display_image: ?{|
    +id: ?string,
    +secure_url: ?string,
  |},
  +$refType: TourItem_tour$ref,
|};
export type TourItem_tour$data = TourItem_tour;
export type TourItem_tour$key = {
  +$data?: TourItem_tour$data,
  +$fragmentRefs: TourItem_tour$ref,
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
  "name": "TourItem_tour",
  "type": "Tour",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
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
(node/*: any*/).hash = 'fde2677f3c0810f0b1d2ab1252a0f7ab';
module.exports = node;
