export const ClickHandler = () => {
  const clickHandler = (event) => {
    console.log("button click", event);
  };
  return (
    <>
      <button onClick={clickHandler}>Click</button>
    </>
  );
};
