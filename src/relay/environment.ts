import {
  Network,
  Store,
  RecordSource,
  Environment,
  FetchFunction,
} from "relay-runtime";

const fetchQuery: FetchFunction = async (params, variables) => {
  // for development purpose
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );

  return await fetch("http://127.0.0.1:8000/graphql" || "", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
};

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
