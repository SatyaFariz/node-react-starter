/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type TermsAndConditionsEdit_tour$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TermsAndConditions_tour$ref: FragmentReference;
declare export opaque type TermsAndConditions_tour$fragmentType: TermsAndConditions_tour$ref;
export type TermsAndConditions_tour = {|
  +id: ?string,
  +terms_and_conditions: ?$ReadOnlyArray<?string>,
  +$fragmentRefs: TermsAndConditionsEdit_tour$ref,
  +$refType: TermsAndConditions_tour$ref,
|};
export type TermsAndConditions_tour$data = TermsAndConditions_tour;
export type TermsAndConditions_tour$key = {
  +$data?: TermsAndConditions_tour$data,
  +$fragmentRefs: TermsAndConditions_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TermsAndConditions_tour",
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
      "name": "terms_and_conditions",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "TermsAndConditionsEdit_tour",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '53fe9bebafec56ee58b56b2d96fa3b8f';
module.exports = node;
