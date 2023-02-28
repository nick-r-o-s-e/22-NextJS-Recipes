import React from "react";
import "../recipes.scss";
function loading() {
  return (
    <>
      {[...Array(5)].map((x, i) => (
        <div key={i} className="placeholder">
          <div className="animated-background"></div>
        </div>
      ))}
    </>
  );
}

export default loading;
