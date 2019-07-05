/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type KidPriceEdit_tour$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type KidPrice_tour$ref: FragmentReference;
declare export opaque type KidPrice_tour$fragmentType: KidPrice_tour$ref;
export type KidPrice_tour = {|
  +id: ?string,
  +kid_price: ?{|
    +price_per_person: ?number,
    +age_description: ?string,
  |},
  +$fragmentRefs: KidPriceEdit_tour$ref,
  +$refType: KidPrice_tour$ref,
|};
export type KidPrice_tour$data = KidPrice_tour;
export type KidPrice_tour$key = {
  +$data?: KidPrice_tour$data,
  +$fragmentRefs: KidPrice_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "KidPrice_tour",
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
    },
    {
      "kind": "FragmentSpread",
      "name": "KidPriceEdit_tour",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '61a675c40bba84be5fb833048a3719af';
module.exports = node;
