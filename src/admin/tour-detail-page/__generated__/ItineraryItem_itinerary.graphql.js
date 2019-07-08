/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItineraryItem_itinerary$ref: FragmentReference;
declare export opaque type ItineraryItem_itinerary$fragmentType: ItineraryItem_itinerary$ref;
export type ItineraryItem_itinerary = {|
  +id: ?string,
  +time_description: ?string,
  +activity_title: ?string,
  +activity_description: ?string,
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
(node/*: any*/).hash = '747529ade679251df2b5dfcab40ea214';
module.exports = node;
