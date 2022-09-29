import { graphql, useQueryLoader } from "react-relay";
import { useEffect, Suspense } from "react";

import RWing from "pages/RWing";
import { RWingQuery } from "__generated__/RWingQuery.graphql";
import Loader from "../components/Loader";
import ErrorBoundary from "../components/ErrorBoundary";

const query = graphql`
  query RWingQuery($params: String!) {
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

const RWingContainer: React.FC = () => {
  const [queryRef, loadQuery] = useQueryLoader<RWingQuery>(query);
  useEffect(() => {
    loadQuery(
      { params: "research" },
      {
        fetchPolicy: "network-only",
      }
    );
  }, [loadQuery]);

  return (
    <Suspense fallback={<Loader />}>
      <ErrorBoundary>
        {queryRef != null && <RWing queryRef={queryRef} query={query} />}
      </ErrorBoundary>
    </Suspense>
  );
};

export default RWingContainer;
