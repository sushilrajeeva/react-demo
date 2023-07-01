import { useState } from "react";

export const Form = () => {
  const [userName, setUsername] = useState("");
  const [country, setCountry] = useState("India");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form data is ${userName} and country is ${country}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={userName}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        ></input>
        <label>Select Country</label>
        <select
          name="country"
          id="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Russia">Russia</option>
          <option value="China">China</option>
        </select>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
