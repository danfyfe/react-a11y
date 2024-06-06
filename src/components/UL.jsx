import withValidation from "../hoc/withValidation";

const UL = ({ children }) => {
  return (
    <ul>
      {children}
    </ul>
  )
};

export default withValidation(UL, { childrenType: 'li', childrenRequired: true });
