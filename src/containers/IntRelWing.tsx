import { graphql, useQueryLoader } from "react-relay";
import { useEffect, Suspense } from "react";

import IntRelWing from "../pages/IntRelWing";
import { IntRelWingQuery } from "../__generated__/IntRelWingQuery.graphql";
import Loader from "../components/Loader";
import ErrorBoundary from "../components/ErrorBoundary";

const query = graphql`
  query IntRelWingQuery($params: String!) {
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
  const [queryRef, loadQuery] = useQueryLoader<IntRelWingQuery>(query);
  useEffect(() => {
    loadQuery(
      { params: "international relations" },
      {
        fetchPolicy: "store-and-network",
      }
    );
  }, [loadQuery]);

  return (
    <Suspense fallback={<Loader />}>
      <ErrorBoundary>
        {queryRef != null && <IntRelWing queryRef={queryRef} query={query} />}
      </ErrorBoundary>
    </Suspense>
  );
};

export default CWingContainer;
