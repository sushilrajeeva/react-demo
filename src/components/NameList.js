export const NameList = () => {
  const names = ["Sushil", "Sunil", "Sachi", "Gerin", "Abhishek"];
  return (
    <div>
      {names.map((name) => {
        return <h2 key={name}>{name}</h2>;
      })}
    </div>
  );
};
