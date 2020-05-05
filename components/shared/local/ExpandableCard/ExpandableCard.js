import React from "react";

const ExpandableCard = ({ children, renderHeader, expanded }) => {
  return (
    <>
      {renderHeader()}
      {expanded && children}
    </>
  );
};

export default ExpandableCard;
