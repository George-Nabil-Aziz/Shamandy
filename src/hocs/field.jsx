// React
import { useState, useEffect } from "react";

export const asField = (Field) => {
  console.log("asField", Field);

  return (props) => {
    console.log("props", props);
    return <Field></Field>;
  };

  // return Field;
};
