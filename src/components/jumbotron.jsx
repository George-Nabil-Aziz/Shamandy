import { useBreadcrumb } from "/src";

export const Jumbotron = () => {
  const { currentRoute } = useBreadcrumb();
  const ReactIcon = currentRoute.data.jtIcon;

  return (
    <div className="flex gap-2">
      <span>{currentRoute.data.jtIcon && <ReactIcon size={24} />}</span>
      <p>{currentRoute.data.jtTitle}</p>
    </div>
  );
};
