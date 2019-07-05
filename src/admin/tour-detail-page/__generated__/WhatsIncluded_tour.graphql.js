/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type WhatsIncludedEdit_tour$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type WhatsIncluded_tour$ref: FragmentReference;
declare export opaque type WhatsIncluded_tour$fragmentType: WhatsIncluded_tour$ref;
export type WhatsIncluded_tour = {|
  +id: ?string,
  +foods_included: ?string,
  +drinks_included: ?string,
  +accomodations_included: ?string,
  +tickets_included: ?string,
  +transportation_included: ?string,
  +equipment_included: ?string,
  +$fragmentRefs: WhatsIncludedEdit_tour$ref,
  +$refType: WhatsIncluded_tour$ref,
|};
export type WhatsIncluded_tour$data = WhatsIncluded_tour;
export type WhatsIncluded_tour$key = {
  +$data?: WhatsIncluded_tour$data,
  +$fragmentRefs: WhatsIncluded_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "WhatsIncluded_tour",
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
      "name": "foods_included",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "drinks_included",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "accomodations_included",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "tickets_included",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "transportation_included",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "equipment_included",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "WhatsIncludedEdit_tour",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1c1f475dc908f67ae4a3e6fd433a3b5b';
module.exports = node;
