import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "./user.slice";

const User = ({ userId }) => {
  const user = useSelector((state) => userSelector.selectById(state, userId));

  if (!user) return null;

  return (
    <div>
      <div>{user.id}</div>
      <div>{user.name}</div>
    </div>
  );
};

export default User;
