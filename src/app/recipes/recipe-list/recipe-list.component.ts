import { Component, OnInit, Output } from "@angular/core";

import { Recipe } from "../recipe.model";
import { EventEmitter } from "events";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
    ),
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
    )
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
