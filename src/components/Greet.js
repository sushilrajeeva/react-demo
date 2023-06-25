export const Greet = (props) => {
  return (
    <div>
      <h1>
        <h1>Hello {props.name}</h1>
        <h2>Evaluating JSX - value passed is {props.value}</h2>
        <h3>
          Working with props with value after manipulation{props.value * 2}
        </h3>
      </h1>
      {props.children}
    </div>
  );
};

export default { Greet };
