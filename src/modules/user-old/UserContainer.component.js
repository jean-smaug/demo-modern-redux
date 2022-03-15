import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./user.action";
import { selectIsLoading } from "./user.selector";
import UserList from "./UserList.component";

const UserContainer = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleClick = () => {
    dispatch(fetchUsers());
  };

  return (
    <>
      <button onClick={handleClick}>Fetch</button>

      {isLoading ? "Chargement..." : <UserList usersIds={[1, 2, 3, 4, 5]} />}
    </>
  );
};

export default UserContainer;
