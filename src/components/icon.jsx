export const Icon = ({ className, ...props }) => {
  return (
    <div className={className}>
      <iconify-icon {...props} />
    </div>
  );
};
