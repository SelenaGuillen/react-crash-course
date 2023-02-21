import "./App.css";
import { Greet } from "./components/Greet";
import { Message } from "./components/Message";
import { ClickHandler } from "./components/ClickHandler";
import { ParentComponent } from "./components/ParentComponent";
import { UserGreeting } from "./components/UserGreeting";
import { NameList } from "./components/NameList";
import { Form } from "./components/Form";
import { PostList } from "./components/PostList";

function App() {
  return (
    <div className="App">
      {/* <Greet name="selena"/>
      <Greet name="Cinna"/> */}

      {/* <ClickHandler /> */}
      {/* <ParentComponent />
      <UserGreeting />
      <NameList />
      <Form /> */}
      <PostList />
    </div>
  );
}

export default App;
