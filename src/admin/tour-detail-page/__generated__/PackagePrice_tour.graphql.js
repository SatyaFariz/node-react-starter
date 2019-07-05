/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PackagePriceEdit_tour$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PackagePrice_tour$ref: FragmentReference;
declare export opaque type PackagePrice_tour$fragmentType: PackagePrice_tour$ref;
export type PackagePrice_tour = {|
  +id: ?string,
  +package_price: ?{|
    +price: ?number,
    +number_of_people: ?number,
  |},
  +$fragmentRefs: PackagePriceEdit_tour$ref,
  +$refType: PackagePrice_tour$ref,
|};
export type PackagePrice_tour$data = PackagePrice_tour;
export type PackagePrice_tour$key = {
  +$data?: PackagePrice_tour$data,
  +$fragmentRefs: PackagePrice_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PackagePrice_tour",
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
    },
    {
      "kind": "FragmentSpread",
      "name": "PackagePriceEdit_tour",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '15161db046755fc7a48a012141997d44';
module.exports = node;
