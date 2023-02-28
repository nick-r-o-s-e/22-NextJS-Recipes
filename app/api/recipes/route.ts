import type { NextApiResponse } from "next";

import { getRecipes, addRecipe, getSingleRecipe } from "@/lib/mongo/recipes";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  const getFunc = id
    ? function () {
        return getSingleRecipe(id);
      }
    : getRecipes;

  try {
    const { recipes, error } = await getFunc();

    if (error) {
      throw new Error(error);
    }

    return NextResponse.json({ recipes });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      console.log("Unexpected error", error);
    }
  }
}

// export async function POST(req: Request, res: NextApiResponse) {
//   const data = await req.json();

//   try {
//     const id = await addRecipe(data);

//     // if (error) {
//     //   throw new Error(error);
//     // }
//     return NextResponse.json({ ...data, _id: id });
//   } catch (err) {
//     if (err instanceof Error) {
//       return res.status(500).json({ error: err.message });
//     } else {
//       console.log("Unexpected error", err);
//     }
//   }
// }
