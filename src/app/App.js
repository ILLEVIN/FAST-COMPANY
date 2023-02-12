import React, { useState } from "react";
import api from "./api";
import SearchStatus from "./components/searchStatus";
import Qualitie from "./components/qualities";
import Users from "./components/users";
import User from "./components/user";
// import Users from "./components/users";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  }

  const handleToggleBookMark = (id) => {
    setUsers(prevState => prevState.map(user => user._id === id ? { ...user, bookmark: !user.bookmark } : user))
  }

  return (
    <>
      <SearchStatus
        key={users.length}
        length={users.length}
      />
      <Users
        users={users}
        onDelete={handleDelete}
        onToggleBookMark={handleToggleBookMark}
      />
    </>

  )

}
export default App