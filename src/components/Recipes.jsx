import React, { useState } from "react";
import Navbar from "./navbar";

function Recipes() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
    <Navbar/>
      <select value={selectedValue} onChange={handleChange}>
        <option value="">Recipes</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select> <br /> <br />
    <div className="row">
      <div className="col-md-4">
        <img src="images/recipe.jpeg" alt=""/>
      </div>
       <div className="col-md-4">
        <img src="images/rep1.jpeg" alt=""/>
      </div>
       <div className="col-md-4">
        <img src="images/rep2.jpeg" alt=""/>
      </div>
    </div>  
      
      
      <br /> <br /> <br /> <br />

      <p>A well-written recipe is a guide for creating a dish, designed to minimize stress and ensure 
        success   by outlining ingredients, quantities, and step-by-step instructions. 
        Essential components include prep/cook times, required equipment, yield, and precise, ordered instructions. 
        Key tips include reading the entire recipe first, measuring ingredients beforehand (mise en place), and understanding that ingredients are listed in order of use.Core Components of a RecipeTitle & Description: Identifies the dish and often gives insight into the flavor or origin.Yield: Tells you how many servings the recipe produces.
        Ingredients List: Listed in order of use with precise measurements (e.g., "1 cup onions, chopped" rather than "1 onion, chopped").
        Preparation Method: Step-by-step instructions, including techniques, temperatures, and times.Equipment Needed: Specific tools required, such as a cast-iron skillet or a specific pan size</p>
    </div>
  );
}

export default Recipes;