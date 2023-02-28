import React from "react";
import { getSingleRecipe } from "@/lib/mongo/recipes";
import Recipe from "@/types/Recipes";

async function fetchRecipe(id: string) {
  const res = await fetch(`http://localhost:3000/api/recipes/?id=${id}`, {
    cache: "no-store",
    headers: {
      method: "GET",
      "Content-Type": "application/json",
    },
  });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  let { recipes } = await res.json();

  return recipes[0] as Recipe;
}

export default async function Page({ params }: { params: { id: string } }) {
  const recipe = await fetchRecipe(params.id);

  return (
    <>
      <pre>{JSON.stringify(recipe, undefined, 2)}</pre>
    </>
  );
}
