import React from "react";
import { useSelector } from "react-redux";
import User from "./User.component";
import { selectUsers } from "./user.selector";

const UserList = () => {
  const users = useSelector(selectUsers);
  console.log(
    "🚀 ~ file: UserList.component.js ~ line 8 ~ UserList ~ users",
    users
  );

  return users.map((user) => <User key={user.id} user={user} />);
};

export default UserList;
