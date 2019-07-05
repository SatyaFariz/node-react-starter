/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type GuestRequirementsEdit_tour$ref: FragmentReference;
declare export opaque type GuestRequirementsEdit_tour$fragmentType: GuestRequirementsEdit_tour$ref;
export type GuestRequirementsEdit_tour = {|
  +tourID: ?string,
  +guest_requirements: ?$ReadOnlyArray<?string>,
  +$refType: GuestRequirementsEdit_tour$ref,
|};
export type GuestRequirementsEdit_tour$data = GuestRequirementsEdit_tour;
export type GuestRequirementsEdit_tour$key = {
  +$data?: GuestRequirementsEdit_tour$data,
  +$fragmentRefs: GuestRequirementsEdit_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "GuestRequirementsEdit_tour",
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
      "name": "guest_requirements",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b5b5332c4421ec5f745766afabef8e95';
module.exports = node;
