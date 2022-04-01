import React from "react";
import "./App.css";
import UserContainer from "./modules/user/UserContainer.component";
import OldUserContainer from "./modules/user-old/UserContainer.component";
import { TodoList } from "./modules/todo/TodoList.component";

function App() {
  console.log(process.env.REACT_APP_VERSION);
  return (
    <div>
      {process.env.REACT_APP_VERSION === "new" && <UserContainer />}
      {process.env.REACT_APP_VERSION === "old" && <OldUserContainer />}

      <div style={{ marginTop: "50px" }}>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
