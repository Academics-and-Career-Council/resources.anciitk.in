/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ResourceType = "document" | "video" | "%future added value";
export type SubResourceType = "gdrive" | "pdf" | "youtube" | "zoom" | "%future added value";
export type IntRelWingQueryVariables = {
    params: string;
};
export type IntRelWingQueryResponse = {
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
export type IntRelWingQuery = {
    readonly response: IntRelWingQueryResponse;
    readonly variables: IntRelWingQueryVariables;
};



/*
query IntRelWingQuery(
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
            "name": "IntRelWingQuery",
            "selections": (v3 /*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "IntRelWingQuery",
            "selections": (v3 /*: any*/)
        },
        "params": {
            "cacheID": "fb18f2a0458ac4a08e29ec0ec98838eb",
            "id": null,
            "metadata": {},
            "name": "IntRelWingQuery",
            "operationKind": "query",
            "text": "query IntRelWingQuery(\n  $params: String!\n) {\n  getResourcesByWing(wing: $params) {\n    id\n    wing\n    order\n    title\n    category\n    objects {\n      id\n      name\n      category\n      link\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '591a11d34a955efb71d22d75c1f48e6e';
export default node;
