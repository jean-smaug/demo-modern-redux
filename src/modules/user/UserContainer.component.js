import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions, userSelector } from "./user.slice";
import UserList from "./UserList.component";

const UserContainer = () => {
  const status = useSelector(userSelector.selectStatus);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(userActions.fetchUsers());
  };

  return (
    <>
      <button onClick={handleClick}>Fetch</button>
      {status === "idle" ? (
        "Rien"
      ) : status === "pending" ? (
        "Chargement"
      ) : status === "failure" ? (
        "Merde"
      ) : status === "success" ? (
        <UserList usersIds={[1, 2, 3, 4, 5]} />
      ) : null}
    </>
  );
};

export default UserContainer;
