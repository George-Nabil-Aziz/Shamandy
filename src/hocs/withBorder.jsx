export const withBorder = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="bg-blue-500">
        <WrappedComponent className={`${props.className || ""}`} {...props} />
      </div>
    );
  };
};
