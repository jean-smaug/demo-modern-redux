import React from "react";
import User from "./User.component";

const UserList = () => {
  return [1].map((userId) => <User key={userId} userId={userId} />);
};

export default UserList;
