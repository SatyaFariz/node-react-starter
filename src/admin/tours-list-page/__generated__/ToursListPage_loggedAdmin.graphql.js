/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ToursList_loggedAdmin$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ToursListPage_loggedAdmin$ref: FragmentReference;
declare export opaque type ToursListPage_loggedAdmin$fragmentType: ToursListPage_loggedAdmin$ref;
export type ToursListPage_loggedAdmin = {|
  +id: ?string,
  +$fragmentRefs: ToursList_loggedAdmin$ref,
  +$refType: ToursListPage_loggedAdmin$ref,
|};
export type ToursListPage_loggedAdmin$data = ToursListPage_loggedAdmin;
export type ToursListPage_loggedAdmin$key = {
  +$data?: ToursListPage_loggedAdmin$data,
  +$fragmentRefs: ToursListPage_loggedAdmin$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ToursListPage_loggedAdmin",
  "type": "LoggedAdmin",
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
      "kind": "FragmentSpread",
      "name": "ToursList_loggedAdmin",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '76ebbc21d1022c9e8e38e1420623a03c';
module.exports = node;
