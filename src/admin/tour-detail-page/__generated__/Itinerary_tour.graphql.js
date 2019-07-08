/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ItineraryCreateForm_tour$ref = any;
type ItineraryItem_itinerary$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Itinerary_tour$ref: FragmentReference;
declare export opaque type Itinerary_tour$fragmentType: Itinerary_tour$ref;
export type Itinerary_tour = {|
  +id: ?string,
  +itinerary: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: ItineraryItem_itinerary$ref,
  |}>,
  +$fragmentRefs: ItineraryCreateForm_tour$ref,
  +$refType: Itinerary_tour$ref,
|};
export type Itinerary_tour$data = Itinerary_tour;
export type Itinerary_tour$key = {
  +$data?: Itinerary_tour$data,
  +$fragmentRefs: Itinerary_tour$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Itinerary_tour",
  "type": "Tour",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "itinerary",
      "storageKey": null,
      "args": null,
      "concreteType": "Itinerary",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "FragmentSpread",
          "name": "ItineraryItem_itinerary",
          "args": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "ItineraryCreateForm_tour",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '36bd59492f3c60d8aca5d1536d925662';
module.exports = node;
