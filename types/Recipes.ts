interface Recipe {
    _id?: string;
    image: string;
    title: string;
    ingredients: string[][];
    prepTime: string;
    coocTime: string;
    servings: string;
    directions: string[];
  }
  
  export default Recipe;
  