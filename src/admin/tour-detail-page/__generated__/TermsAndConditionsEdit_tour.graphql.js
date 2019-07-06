/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TermsAndConditionsEdit_tour$ref: FragmentReference;
declare export opaque type TermsAndConditionsEdit_tour$fragmentType: TermsAndConditionsEdit_tour$ref;
export type TermsAndConditionsEdit_tour = {|
  +tourID: ?string,
  +terms_and_conditions: ?$ReadOnlyArray<?string>,
  +$refType: TermsAndConditionsEdit_tour$ref,
|};
export type TermsAndConditionsEdit_tour$data = TermsAndConditionsEdit_tour;
export type TermsAndConditionsEdit_tour$key = {
  +$data?: TermsAndConditionsEdit_tour$data,
  +$fragmentRefs: TermsAndConditionsEdit_tour$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TermsAndConditionsEdit_tour",
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
      "name": "terms_and_conditions",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '96d49cee77e95290c6f786af74ceb167';
module.exports = node;
