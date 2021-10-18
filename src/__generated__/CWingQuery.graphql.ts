/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ResourceType = "document" | "video" | "%future added value";
export type SubResourceType = "gdrive" | "pdf" | "youtube" | "zoom" | "%future added value";
export type CWingQueryVariables = {
    params: string;
};
export type CWingQueryResponse = {
    readonly getResourcesByWing: ReadonlyArray<{
        readonly id: string;
        readonly wing: string;
        readonly order: number;
        readonly title: string;
        readonly category: ResourceType;
        readonly objects: ReadonlyArray<{
            readonly id: string;
            readonly name: string;
            readonly category: SubResourceType;
            readonly link: string;
        }>;
    }>;
};
export type CWingQuery = {
    readonly response: CWingQueryResponse;
    readonly variables: CWingQueryVariables;
};



/*
query CWingQuery(
  $params: String!
) {
  getResourcesByWing(wing: $params) {
    id
    wing
    order
    title
    category
    objects {
      id
      name
      category
      link
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "params"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "category",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "wing",
        "variableName": "params"
      }
    ],
    "concreteType": "Resource",
    "kind": "LinkedField",
    "name": "getResourcesByWing",
    "plural": true,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "wing",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "order",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "SubResource",
        "kind": "LinkedField",
        "name": "objects",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "link",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CWingQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CWingQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "95b1a589f88fd9a4dc37d74e30bbd40b",
    "id": null,
    "metadata": {},
    "name": "CWingQuery",
    "operationKind": "query",
    "text": "query CWingQuery(\n  $params: String!\n) {\n  getResourcesByWing(wing: $params) {\n    id\n    wing\n    order\n    title\n    category\n    objects {\n      id\n      name\n      category\n      link\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '514ef23cc7951c9b4f99520ce070c834';
export default node;
