import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.mode";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Salad','Mixture of stuff','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg', [
            new Ingredient('Tomato', 1),
            new Ingredient('Honey', 5),
        ]),
        new Recipe('Mixed Rice','Mexican Food','https://thumbor.thedailymeal.com/LYFmeQejm31rQhLIgZjp0YZYEgI=/870x565/https://www.thedailymeal.com/sites/default/files/slideshows/1952820/2121750/20-tetrazzini.JPG', [
            new Ingredient('Rice', 1),
            new Ingredient('Spices', 5),
        ]),
    ];
    
    constructor(private slService : ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}