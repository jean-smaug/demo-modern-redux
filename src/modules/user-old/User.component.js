import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <div>{user.id}</div>
      <div>{user.name}</div>
    </div>
  );
};

export default User;
