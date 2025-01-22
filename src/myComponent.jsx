import React, { useState } from "react";

function Component() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [present, setPresent] = useState(false);

  const updateName = () => {
    setName("Shameme Miah");
  };

  const updateAge = () => {
    setAge(age + 1);
  };

  const arePresent = () => {
    setPresent(!present);
  };

  return (
    <>
      <div className="value">
        <p>Name: {name}</p>
      </div>
      <button onClick={updateName}>set Name</button>

      <div className="value">
        <p>Age: {age}</p>
      </div>

      <button onClick={updateAge}>set Age</button>

      <div className="value">
        <p>Are You There? : {present ? "Yes" : "No"}</p>
      </div>

      <button onClick={arePresent}>Present</button>
    </>
  );
}

export default Component;
