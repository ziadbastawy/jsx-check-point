const Border = ({ color, borderRadius, children }) => {
  return (
    <div
      style={{
        border: `1px solid ${color}`,
        borderRadius: `${borderRadius}px`,
      }}
    >
      {children}
    </div>
  );
};

export default Border;