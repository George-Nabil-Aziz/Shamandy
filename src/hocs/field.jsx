// React
import { useState, useEffect } from "react";

export const asField = (Field) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    console.log("Field", Field);
    console.log("props", props);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }, []);

    // return <Field newVar="Newwww"></Field>;
    // return loading ? <p>Loading...</p> : <Field newVar="Newwww"></Field>;
    return <Field newVar={loading ? "Loading..." : "Data Loaded!"}></Field>;
  };
  // console.log(Field);
  // return Field;
};
