export const NameList = () => {
  const names = ["Cinna", "Selena", "Nikko"];
  return (
    <>
      {names.map((name) => {
        return <h2 key={name}>{name}</h2>;
      })}
    </>
  );
};
