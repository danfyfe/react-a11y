import validateChildren from "../utils/validateChildren";

const withValidation = (Component, config) => {
  const WrappedComponent = ({ children, ...props }) => {
    if (process.env.NODE_ENV !== 'production') {
      validateChildren({ children, config });
    }

    return <Component {...(props)}>{children}</Component>;
  };

  return WrappedComponent;
};

export default withValidation;
