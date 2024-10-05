import { useBreadcrumb } from "/src";

export const Jumbotron = () => {
  const { currentRoute } = useBreadcrumb();
  // const ReactIcon = currentRoute.data.jtIcon;

  return (
    <div className="flex gap-2">
      {/* TODO: Hint enhancement of same function */}
      {/* <span>{currentRoute.data.jtIcon && <ReactIcon size={24} />}</span> */}
      <span>
        {currentRoute.data.jtIcon && <currentRoute.data.jtIcon size={24} />}
      </span>
      <p>{currentRoute.data.jtTitle}</p>
    </div>
  );
};
