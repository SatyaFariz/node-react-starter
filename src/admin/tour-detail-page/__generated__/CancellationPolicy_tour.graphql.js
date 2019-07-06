/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type CancellationPolicyEdit_tour$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CancellationPolicy_tour$ref: FragmentReference;
declare export opaque type CancellationPolicy_tour$fragmentType: CancellationPolicy_tour$ref;
export type CancellationPolicy_tour = {|
  +id: ?string,
  +cancellation_policy: ?$ReadOnlyArray<?string>,
  +$fragmentRefs: CancellationPolicyEdit_tour$ref,
  +$refType: CancellationPolicy_tour$ref,
|};
export type CancellationPolicy_tour$data = CancellationPolicy_tour;
export type CancellationPolicy_tour$key = {
  +$data?: CancellationPolicy_tour$data,
  +$fragmentRefs: CancellationPolicy_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CancellationPolicy_tour",
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
      "name": "cancellation_policy",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "CancellationPolicyEdit_tour",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'fe7a3fe8ee1a4e124be741a6a788f4f7';
module.exports = node;
