import React from "react";
import "./App.css";
import UserContainer from "./modules/user/UserContainer.component";
import OldUserContainer from "./modules/user-old/UserContainer.component";

function App() {
  return (
    <div>
      {process.env.APP_VERSION === "new" && <UserContainer />}
      {process.env.APP_VERSION === "old" && <OldUserContainer />}
    </div>
  );
}

export default App;
