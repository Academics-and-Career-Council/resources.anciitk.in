import { graphql, useQueryLoader } from "react-relay"
import { useEffect, Suspense } from "react"

import Cwing from "pages/CWing";
import { CWingQuery } from "__generated__/CWingQuery.graphql";

const query = graphql`
  query CWingQuery($params:String!){
    getResourcesByWing(wing:$params){
    id
    wing
    title
    category
    objects {
      id
      name
      category
      link
    }
  }
}`;

const CWingContainer:React.FC = () => {
  const [queryRef, loadQuery] = useQueryLoader<CWingQuery>(query)
  useEffect(() => {
    loadQuery({params: "career development"}, {
      fetchPolicy: "network-only"
    })
  }, [loadQuery])

  return (
    <Suspense fallback="">
      {queryRef != null && <Cwing queryRef={queryRef} query={query} />}
    </Suspense>
  )
}

export default CWingContainer;