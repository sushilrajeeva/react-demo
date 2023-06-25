//Showing use of state in react

import { useState } from "react";

export const Message = () => {
  //this syntax is called array-destructuring
  const [message, setMessage] = useState("Welcome Visitor");
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Thank you for subscribing!!")}>
        Subscribe!
      </button>
    </div>
  );
};

export default { Message };
