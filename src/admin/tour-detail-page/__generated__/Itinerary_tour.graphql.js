/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '0c053bbea0140597f96ebca3d93b548e';
module.exports = node;
