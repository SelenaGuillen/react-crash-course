import { useState } from "react";

export const Form = () => {
  const [username, setUsername] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form data is ${username}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};