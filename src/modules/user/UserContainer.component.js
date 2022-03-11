import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./user.slice";
import UserList from "./UserList.component";

const UserContainer = () => {
  const status = useSelector((state) => state.users.status);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userActions.fetchUsers());
  }, [dispatch]);

  switch (status) {
    case "idle":
      return "";

    case "pending":
      return "Chargement...";

    case "failure":
      return "Merde...";

    case "success":
      return <UserList usersIds={[1, 2, 3, 4, 5]} />;

    default:
      throw new Error(`Unhandeled case : ${status}`);
  }
};

export default UserContainer;
