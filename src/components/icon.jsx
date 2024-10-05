export const Icon = ({ className, ...props }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <iconify-icon {...props} />
    </div>
  );
};
