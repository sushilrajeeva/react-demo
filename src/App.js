import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/Greet.js";
import { Message } from "./components/Message";
import { ClickHandler } from "./components/ClickHandler";
import { ParentComponenet } from "./components/ParentComponenet";
import { UserGreeting } from "./components/UserGreeting";
import { NameList } from "./components/NameList";

function App() {
  return (
    <div className="App">
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
      <NameList></NameList>
    </div>
  );
}

export default App;
