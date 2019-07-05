/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type WhatsIncludedEdit_tour$ref: FragmentReference;
declare export opaque type WhatsIncludedEdit_tour$fragmentType: WhatsIncludedEdit_tour$ref;
export type WhatsIncludedEdit_tour = {|
  +tourID: ?string,
  +foods_included: ?string,
  +drinks_included: ?string,
  +accomodations_included: ?string,
  +tickets_included: ?string,
  +transportation_included: ?string,
  +equipment_included: ?string,
  +$refType: WhatsIncludedEdit_tour$ref,
|};
export type WhatsIncludedEdit_tour$data = WhatsIncludedEdit_tour;
export type WhatsIncludedEdit_tour$key = {
  +$data?: WhatsIncludedEdit_tour$data,
  +$fragmentRefs: WhatsIncludedEdit_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "WhatsIncludedEdit_tour",
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '02b0f930b9a5d58e41f84126110dd53a';
module.exports = node;
