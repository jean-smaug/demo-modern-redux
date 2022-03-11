import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { userActions } from "./modules/user/user.slice";
// import UserList from "./modules/user/UserList.component";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userActions.fetchUsers());
  }, [dispatch]);

  return (
    <div>
      azeazeaz
      {/* <UserList /> */}
    </div>
  );
}

export default App;
