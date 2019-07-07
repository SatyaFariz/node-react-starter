/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MapsAndLocationDetails_tour$ref: FragmentReference;
declare export opaque type MapsAndLocationDetails_tour$fragmentType: MapsAndLocationDetails_tour$ref;
export type MapsAndLocationDetails_tour = {|
  +id: ?string,
  +location_details: ?string,
  +location: ?{|
    +lat: ?number,
    +lng: ?number,
  |},
  +$refType: MapsAndLocationDetails_tour$ref,
|};
export type MapsAndLocationDetails_tour$data = MapsAndLocationDetails_tour;
export type MapsAndLocationDetails_tour$key = {
  +$data?: MapsAndLocationDetails_tour$data,
  +$fragmentRefs: MapsAndLocationDetails_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MapsAndLocationDetails_tour",
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
      "name": "location_details",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "location",
      "storageKey": null,
      "args": null,
      "concreteType": "Coordinate",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "lat",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "lng",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'bc984ad2d98b236bef49f8fd8581b4d6';
module.exports = node;
