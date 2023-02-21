import { useState } from "react";

{
  console.log("testing");
}
export const Message = () => {
  const [message, setMessage] = useState("default message");
  return (
    <>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Thanks for clicking")}>
        Subscribe
      </button>
    </>
  );
};
