/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CancellationPolicyEdit_tour$ref: FragmentReference;
declare export opaque type CancellationPolicyEdit_tour$fragmentType: CancellationPolicyEdit_tour$ref;
export type CancellationPolicyEdit_tour = {|
  +tourID: ?string,
  +cancellation_policy: ?$ReadOnlyArray<?string>,
  +$refType: CancellationPolicyEdit_tour$ref,
|};
export type CancellationPolicyEdit_tour$data = CancellationPolicyEdit_tour;
export type CancellationPolicyEdit_tour$key = {
  +$data?: CancellationPolicyEdit_tour$data,
  +$fragmentRefs: CancellationPolicyEdit_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CancellationPolicyEdit_tour",
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
      "name": "cancellation_policy",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f578be84eb4c96547eb1db0708f3c26e';
module.exports = node;
