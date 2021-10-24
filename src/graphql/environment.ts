import {
  Network,
  Store,
  RecordSource,
  Environment,
  FetchFunction,
} from "relay-runtime";
import axios from "axios";

const fetchQuery:FetchFunction = async (params, variables) => {
  // for development purpose
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );
  let gqlURL= "";
  const headers = {
    "Content-type": "application/json",
  }
  if (process.env.REACT_APP_GQL_SERVER) {
    gqlURL= process.env?.REACT_APP_GQL_SERVER;
  }

  return await axios.post(gqlURL, JSON.stringify({query:params.text, variables}), {headers} )
  .then((response) => {
    console.log(response.data)
    return response.data
  })
}

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
