import React from "react";

import { createFragmentContainer, graphql } from "react-relay";

interface props {
  id: string;
  name: string;
  category: string;
  link: string;
}

const DocItem: React.FC<props> = ({ id, name, category, link }) => {
  return (
    <li>
      <a
        href={link}
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        {name}
      </a>
    </li>
  );
};

// export default createFragmentContainer(DocItem,graphql`
//   fragment DocItem_subItem on DocItem {
//     id
//     name
//     category
//     link
//   }`
// )
export default DocItem;
