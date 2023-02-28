import Recipe from "@/types/Recipes";
import CardPreview from "../../(components)/CardPreview/CardPreview";
async function fetchRecipes() {
  const res = await fetch("http://localhost:3000/api/recipes", {
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
  // const check = await res.json();
  // console.log(check);

  let { recipes } = await res.json();
  console.log(recipes);

  return recipes as Recipe[];
}

export default async function RecipesPage() {
  const recipes = await fetchRecipes();

  return (
    <>
      {recipes.map((recipe) => {
        return <CardPreview recipe={recipe} />;
      })}
    </>
  );
}
