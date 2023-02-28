import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-container">
      <div className="cards-container">{children}</div>
    </div>
  );
}

export default layout;
