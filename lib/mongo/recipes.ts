import { Collection, Db, MongoClient, ObjectId, OptionalId } from "mongodb";
import { isDataView } from "util/types";
import clientPromise from "./mongodb";

let client: MongoClient;
let db: Db;
let recipes: Collection<Document>;
async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db("Recipes");
    
    recipes = db.collection("recipes");
    
    
  } catch (err) {
    throw new Error("Failed to stablish connection to database");
  }
}

(async () => {
  await init();
})();

export async function getRecipes() {

  try {
    if (!recipes) {
      await init();
    }
    const result = await recipes
      .find({})
      .map((recipe) => ({ ...recipe, _id: recipe._id.toString() }))
      .toArray();
    
      return ({recipes: result})
  } catch (err) {
    return {error: "Failed to fetch recipes"}
  }
}
export async function getSingleRecipe(id:string) {
  
  try {
    if (!recipes) {
      await init();
    }
    const result = await recipes
      .find({_id: new ObjectId(id)})
      .map((recipe) => ({ ...recipe, _id: recipe._id.toString() }))
      .toArray();
    
      return ({recipes: result})
  } catch (err) {
    return {error: "Failed to fetch recipes"}
  }
}

export async function addRecipe(data:any) {
  try {
    if (!recipes) {
      await init();
    }
    let bodyObject = data;
    
        const {insertedId: id} = await db.collection("recipes").insertOne(bodyObject);
       return id
        
      return ("Added new recipe")
  } catch (err) {
    return {error: "Failed to add new recipe"}
  }
}
