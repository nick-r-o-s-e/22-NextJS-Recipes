import React from "react";
import "../../recipes.scss";
function layout({ children }: { children: React.ReactNode }) {
  return <div className="recipe-container">{children}</div>;
}

export default layout;
