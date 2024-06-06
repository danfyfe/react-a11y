import withValidation from "../hoc/withValidation";
import React from "react";

const UL = ({ children }) => {
  return (
    <ul>
      {children}
    </ul>
  )
};

export default withValidation(UL, { childrenType: 'li', childrenRequired: true });
