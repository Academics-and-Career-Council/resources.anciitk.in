import {
  Network,
  Store,
  RecordSource,
  Environment,
  FetchFunction,
} from "relay-runtime";
import axios from "axios";

// const fetchQuery: FetchFunction = async (params, variables) => {

const fetchQuery:FetchFunction = async (params, variables) => {
  // for development purpose
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );

  // return await axios.post("http://127.0.0.1:8000/graphql" || "", {
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     query: params.text,
  //     variables,
  //   }),
  // }).then((response) => {
  //   return response.json();
  // });
  let gqlURL= "";
  const headers = {
    "Content-type": "application/json",
    withCredentials:true
  }
  if (process.env.REACT_APP_GQL_SERVER) {
    gqlURL= process.env?.REACT_APP_GQL_SERVER;
  }
  // const fetch = axios.create({
  //   withCredentials:true
  // })
  // return await axios(gqlURL, {
  //   method: "POST",
  //   data: JSON.stringify({
  //     query: params.text,
  //     variables,
  //   }),
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  //   withCredentials: true
  // }).then((response => response.data))

  return await axios.post(gqlURL, JSON.stringify({query:params.text, variables}), {headers})
  .then((response) => {
    console.log(response.data)
    return response.data
  })
}

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
