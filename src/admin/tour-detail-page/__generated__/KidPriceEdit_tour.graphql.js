/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type KidPriceEdit_tour$ref: FragmentReference;
declare export opaque type KidPriceEdit_tour$fragmentType: KidPriceEdit_tour$ref;
export type KidPriceEdit_tour = {|
  +tourID: ?string,
  +kid_price: ?{|
    +price_per_person: ?number,
    +age_description: ?string,
  |},
  +$refType: KidPriceEdit_tour$ref,
|};
export type KidPriceEdit_tour$data = KidPriceEdit_tour;
export type KidPriceEdit_tour$key = {
  +$data?: KidPriceEdit_tour$data,
  +$fragmentRefs: KidPriceEdit_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "KidPriceEdit_tour",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "kid_price",
      "storageKey": null,
      "args": null,
      "concreteType": "TourKidPrice",
      "plural": false,
      "selections": [
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
          "name": "age_description",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '34765ab0497e3f8054efad7462f6a1ea';
module.exports = node;
