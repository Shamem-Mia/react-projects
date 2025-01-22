import React, { useState } from "react";

function Component2() {
  const [foods, setfood] = useState(["mango", "Banana", "apple"]);

  const addFood = () => {
    const inputValue = document.getElementById("food-input");
    const foodIteam = inputValue.value;
    inputValue.value = " ";
    setfood([...foods, foodIteam]);
  };

  const deleteFood = (index) => {
    setfood(foods.filter((_, i) => i !== index));
  };

  return (
    <>
      <h2>Food List</h2>
      <ul>
        {foods.map((food, index) => (
          <li onClick={() => deleteFood(index)}> {food} </li>
        ))}
      </ul>
      <input type="text" id="food-input" placeholder="Enter a food" />
      <button onClick={addFood}>Add food</button>
    </>
  );
}

export default Component2;
