import React, { useState, useEffect } from "react";
import api from "../api";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const UserPage = ({ id }) => {
  const history = useHistory();
  const [user, setUsers] = useState({});
  useEffect(() => {
    api.users.getById(id).then((data) => setUsers(data));
  }, [id]);
  const handleAllUsers = () => {
    history.replace("/users");
  };

  return (
    <div>
      {user ? (
        <>
          <h1>{user.name}</h1>
          {user.profession && <h2>Профессия: {user.profession.name}</h2>}
          <div>
            {user.qualities?.map((q) => (
              <span key={q._id} className={"badge m-1 bg-" + q.color}>{q.name}</span>
            ))}
          </div>
          <span>completedMeetings: {user.completedMeetings}</span>
          <h2>Rate: {user.rate}</h2>
          <button onClick={handleAllUsers}>Все пользователи</button>
        </>
      ) : (<>
        <h1>Loading...</h1>
        <button onClick={handleAllUsers}>Все пользователи</button>
      </>
      )}
    </div>

  );
};

UserPage.propTypes = {
  id: PropTypes.string.isRequired
};

export default UserPage;
