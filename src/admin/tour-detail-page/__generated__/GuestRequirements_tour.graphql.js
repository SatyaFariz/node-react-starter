/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type GuestRequirementsEdit_tour$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type GuestRequirements_tour$ref: FragmentReference;
declare export opaque type GuestRequirements_tour$fragmentType: GuestRequirements_tour$ref;
export type GuestRequirements_tour = {|
  +id: ?string,
  +guest_requirements: ?$ReadOnlyArray<?string>,
  +$fragmentRefs: GuestRequirementsEdit_tour$ref,
  +$refType: GuestRequirements_tour$ref,
|};
export type GuestRequirements_tour$data = GuestRequirements_tour;
export type GuestRequirements_tour$key = {
  +$data?: GuestRequirements_tour$data,
  +$fragmentRefs: GuestRequirements_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "GuestRequirements_tour",
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
      "name": "guest_requirements",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "GuestRequirementsEdit_tour",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '7ee5d0cfa9559f7a0c3372948710baa3';
module.exports = node;
