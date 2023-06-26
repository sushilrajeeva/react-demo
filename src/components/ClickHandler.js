export const ClickHandler = () => {
  //by default event handler will also pass event
  const clickHandler = (event, count = 1) => {
    console.log("Button is Clicked!", count, event);
  };
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      <button onClick={(event) => clickHandler(event, 5)}>Click 5</button>
    </div>
  );
};
