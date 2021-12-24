import { graphql, useQueryLoader } from "react-relay";
import { useEffect, Suspense } from "react";

import Cwing from "pages/CWing";
import { CWingQuery } from "__generated__/CWingQuery.graphql";
import Loader from "../components/Loader";
import ErrorBoundary from "../components/ErrorBoundary";

const query = graphql`
  query CWingQuery($params: String!) {
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
`;

const CWingContainer: React.FC = () => {
  const [queryRef, loadQuery] = useQueryLoader<CWingQuery>(query);
  useEffect(() => {
    loadQuery(
      { params: "career development" },
      {
        fetchPolicy: "network-only",
      }
    );
  }, [loadQuery]);

  return (
    <Suspense fallback={<Loader />}>
      <ErrorBoundary>
        {queryRef != null && <Cwing queryRef={queryRef} query={query} />}
      </ErrorBoundary>
    </Suspense>
  );
};

export default CWingContainer;
