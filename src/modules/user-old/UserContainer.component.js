import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "./user.slice";
import UserList from "./UserList.component";

const UserContainer = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(userActions.fetchUsers());
  };

  return (
    <>
      <button onClick={handleClick}>Fetch</button>

      <UserList usersIds={[1, 2, 3, 4, 5]} />
    </>
  );
};

export default UserContainer;
