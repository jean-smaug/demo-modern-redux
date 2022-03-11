import React from "react";
import User from "./User.component";

const UserList = ({ usersIds }) => {
  return usersIds.map((userId) => <User key={userId} userId={userId} />);
};

export default UserList;
