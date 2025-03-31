// Core
import { AppButton, asField } from "/src";

export const StudioTwoPage = () => {
  const MyComponent = asField(({ newVar }) => <h2>{newVar}</h2>);
  return <MyComponent />;
};

// export const StudioTwoPage = asField(({ newVar }) => {
//   return (
//     <AppButton
//       label="Go home"
//       icon="iconamoon:menu-burger-horizontal-fill"
//       onClick={(e) => console.log(e)}
//       // path="/"
//       danger
//       className="w-fit"
//       loading={true}
//       disabeld={true}
//     >
//       {newVar}
//     </AppButton>
//   );
// });
