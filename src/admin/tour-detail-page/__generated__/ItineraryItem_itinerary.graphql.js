/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ItineraryItemEdit_itinerary$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItineraryItem_itinerary$ref: FragmentReference;
declare export opaque type ItineraryItem_itinerary$fragmentType: ItineraryItem_itinerary$ref;
export type ItineraryItem_itinerary = {|
  +id: ?string,
  +tour_id: ?string,
  +time_description: ?string,
  +activity_title: ?string,
  +activity_description: ?string,
  +$fragmentRefs: ItineraryItemEdit_itinerary$ref,
  +$refType: ItineraryItem_itinerary$ref,
|};
export type ItineraryItem_itinerary$data = ItineraryItem_itinerary;
export type ItineraryItem_itinerary$key = {
  +$data?: ItineraryItem_itinerary$data,
  +$fragmentRefs: ItineraryItem_itinerary$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ItineraryItem_itinerary",
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
      "name": "tour_id",
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
    },
    {
      "kind": "FragmentSpread",
      "name": "ItineraryItemEdit_itinerary",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '952fa6a1c562a7884b3a6366649a15f9';
module.exports = node;
