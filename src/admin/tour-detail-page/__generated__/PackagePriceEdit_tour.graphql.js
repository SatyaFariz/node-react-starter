/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PackagePriceEdit_tour$ref: FragmentReference;
declare export opaque type PackagePriceEdit_tour$fragmentType: PackagePriceEdit_tour$ref;
export type PackagePriceEdit_tour = {|
  +tourID: ?string,
  +package_price: ?{|
    +price: ?number,
    +number_of_people: ?number,
  |},
  +$refType: PackagePriceEdit_tour$ref,
|};
export type PackagePriceEdit_tour$data = PackagePriceEdit_tour;
export type PackagePriceEdit_tour$key = {
  +$data?: PackagePriceEdit_tour$data,
  +$fragmentRefs: PackagePriceEdit_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PackagePriceEdit_tour",
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
      "name": "package_price",
      "storageKey": null,
      "args": null,
      "concreteType": "TourPackagePrice",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "price",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "number_of_people",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '31e99faa4f31f4ec75e81a1cc1f2be21';
module.exports = node;
