import {
  Network,
  Store,
  RecordSource,
  Environment,
  FetchFunction,
} from "relay-runtime";
import axios from "axios";

const fetchQuery:FetchFunction = async (params, variables) => {
  let gqlURL= "";
  const headers = {
    "Content-type": "application/json",
  }
  if (process.env.REACT_APP_PUBLIC_GQL_SERVER) {
    gqlURL= process.env?.REACT_APP_PUBLIC_GQL_SERVER;
  }

  return await axios.post(gqlURL, JSON.stringify({query:params.text, variables}), {headers, withCredentials:true} )
  .then((response) => {
    return response.data
  })
}

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
