import React, { useState, useEffect } from "react";
import api from "./api";
import Users from "./components/users";

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    api.users
      .fetchAll()
      .then((data) =>
        setUsers(data));
  }, []);

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handleToggleBookMark = (id) => {
    setUsers((prevState) =>
      prevState.map((user) =>
        user._id === id ? { ...user, bookmark: !user.bookmark } : user
      )
    );
  };

  return (
    <>
      {users && (
        <Users
          users={users}
          onDelete={handleDelete}
          onToggleBookMark={handleToggleBookMark}
        />
      )}
    </>
  );
}
export default App;
