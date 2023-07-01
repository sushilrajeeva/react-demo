import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/Greet.js";
import { Message } from "./components/Message";
import { ClickHandler } from "./components/ClickHandler";
import { ParentComponenet } from "./components/ParentComponenet";
import { UserGreeting } from "./components/UserGreeting";
import { NameList } from "./components/NameList";
import { Stylesheet } from "./components/Stylesheet";
import { InLine } from "./components/InLine";
import { Form } from "./components/Form";
import NAMES from "./components/data.json";

// import "./appStyles.css";
// import styles from "./appStyles.module.css";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { useState, useTransition } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isPending, startTransition] = useTransition();
  const changeHandler = (event) => {
    setInputValue(event.target.value);
    startTransition(() => setQuery(event.target.value));
  };
  const filteredNames = NAMES.filter((item) => {
    return item.first_name.includes(query) || item.last_name.includes(query);
  });
  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={changeHandler}></input>
      {isPending && <p>Updating list...</p>}
      {filteredNames.map((item) => {
        return (
          <p key={item.id}>
            {item.first_name} {item.last_name}
          </p>
        );
      })}

      {/* <Greet name="Sushil" value="3" />
      <Greet name="Sunil" value="4">
        <button>Action</button>
      </Greet>
      <Greet name="Vishal" value="5">
        This is the child props and marking end of the demo
      </Greet> */}
      {/* <Message></Message> */}
      {/* <ClickHandler></ClickHandler> */}
      {/* <ParentComponenet></ParentComponenet> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      {/* <Stylesheet></Stylesheet>
      <InLine></InLine>
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Form></Form> */}
      {/* <PostForm></PostForm>
      <PostList></PostList> */}
    </div>
  );
}

export default App;
