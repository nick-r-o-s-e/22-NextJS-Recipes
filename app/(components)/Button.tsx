"use client";

import React, { useState } from "react";

const submit = async (data: any) => {
  const res = await fetch("http://localhost:3000/api/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to post data");
  }
  console.log(res);
};

function Button() {
  const [state, setState] = useState({
    name: "Check",
    group: "Fishes",
    image: "",
  });

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        submit(state);
      }}
    >
      Button
    </button>
  );
}

export default Button;
