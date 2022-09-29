import { graphql, useQueryLoader } from "react-relay";
import { useEffect, Suspense } from "react";

import UgAcadsWing from "pages/UgAcadsWing";
import { UgAcadsWingQuery } from "__generated__/UgAcadsWingQuery.graphql";
import Loader from "../components/Loader";
import ErrorBoundary from "../components/ErrorBoundary";

const query = graphql`
  query UgAcadsWingQuery($params: String!) {
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

const UgAcadsWingContainer: React.FC = () => {
  const [queryRef, loadQuery] = useQueryLoader<UgAcadsWingQuery>(query);
  useEffect(() => {
    loadQuery(
      { params: "ug academics" },
      {
        fetchPolicy: "network-only",
      }
    );
  }, [loadQuery]);

  return (
    <Suspense fallback={<Loader />}>
      <ErrorBoundary>
        {queryRef != null && <UgAcadsWing queryRef={queryRef} query={query} />}
      </ErrorBoundary>
    </Suspense>
  );
};

export default UgAcadsWingContainer;
