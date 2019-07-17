/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type TourItem_tour$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ToursList_loggedAdmin$ref: FragmentReference;
declare export opaque type ToursList_loggedAdmin$fragmentType: ToursList_loggedAdmin$ref;
export type ToursList_loggedAdmin = {|
  +tours: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +node: ?{|
        +id: ?string,
        +$fragmentRefs: TourItem_tour$ref,
      |},
    |}>,
    +pageInfo: {|
      +hasNextPage: boolean,
      +endCursor: ?string,
    |},
  |},
  +$refType: ToursList_loggedAdmin$ref,
|};
export type ToursList_loggedAdmin$data = ToursList_loggedAdmin;
export type ToursList_loggedAdmin$key = {
  +$data?: ToursList_loggedAdmin$data,
  +$fragmentRefs: ToursList_loggedAdmin$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ToursList_loggedAdmin",
  "type": "LoggedAdmin",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": [
          "tours"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "first",
      "type": "Int",
      "defaultValue": 12
    },
    {
      "kind": "LocalArgument",
      "name": "after",
      "type": "String",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "tours",
      "name": "__ToursList_tours_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "TourConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "TourEdge",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Tour",
              "plural": false,
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
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "TourItem_tour",
                  "args": null
                }
              ]
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '663652441a5c62f408072d1843133e1c';
module.exports = node;
