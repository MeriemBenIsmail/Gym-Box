import React, { useState } from "react";
import CustomCursorContext, {
  CursorLookType,
} from "./CustomCursorContext.ts";

const CustomCursorManager = ({ children }) => {
  const [type, setType] = useState("default");

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  );
};

export default CustomCursorManager;