/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ResourceType = "document" | "video" | "%future added value";
export type SubResourceType = "gdrive" | "pdf" | "youtube" | "zoom" | "%future added value";
export type RWingQueryVariables = {
    params: string;
};
export type RWingQueryResponse = {
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
export type RWingQuery = {
    readonly response: RWingQueryResponse;
    readonly variables: RWingQueryVariables;
};



/*
query RWingQuery(
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

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "params"
        } as any)
    ], v1 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any), v2 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "category",
        "storageKey": null
    } as any), v3 = [
        ({
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
                (v1 /*: any*/),
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
                (v2 /*: any*/),
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "SubResource",
                    "kind": "LinkedField",
                    "name": "objects",
                    "plural": true,
                    "selections": [
                        (v1 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                        },
                        (v2 /*: any*/),
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
        } as any)
    ];
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "RWingQuery",
            "selections": (v3 /*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "RWingQuery",
            "selections": (v3 /*: any*/)
        },
        "params": {
            "cacheID": "bb7fe7d597f53cb6819c5e7c3261a472",
            "id": null,
            "metadata": {},
            "name": "RWingQuery",
            "operationKind": "query",
            "text": "query RWingQuery(\n  $params: String!\n) {\n  getResourcesByWing(wing: $params) {\n    id\n    wing\n    order\n    title\n    category\n    objects {\n      id\n      name\n      category\n      link\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '1a1ce3547376cf3d3d771ee03cdc1750';
export default node;
