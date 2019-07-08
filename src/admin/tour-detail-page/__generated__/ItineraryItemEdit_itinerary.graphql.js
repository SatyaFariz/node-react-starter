/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItineraryItemEdit_itinerary$ref: FragmentReference;
declare export opaque type ItineraryItemEdit_itinerary$fragmentType: ItineraryItemEdit_itinerary$ref;
export type ItineraryItemEdit_itinerary = {|
  +id: ?string,
  +time_description: ?string,
  +activity_title: ?string,
  +activity_description: ?string,
  +$refType: ItineraryItemEdit_itinerary$ref,
|};
export type ItineraryItemEdit_itinerary$data = ItineraryItemEdit_itinerary;
export type ItineraryItemEdit_itinerary$key = {
  +$data?: ItineraryItemEdit_itinerary$data,
  +$fragmentRefs: ItineraryItemEdit_itinerary$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ItineraryItemEdit_itinerary",
  "type": "Itinerary",
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
      "name": "time_description",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "activity_title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "activity_description",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '50fc3a89c19fc0b29f43b02a2491e9d7';
module.exports = node;
