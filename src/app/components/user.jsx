import React from "react";
import Qualitie from "./qualities";
import BookMark from "./bookmark";

const User = ({ name, qualities, profession, completedMeetings, rate, _id, onDelete, bookmark, onToggleBookMark }) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{qualities.map((q) => (
          <Qualitie
            key={q._id}
            name={q.name}
            color={q.color}
          />
        ))}</td>
        <td>{profession.name}</td>
        <td>{completedMeetings}</td>
        <td>{rate}</td>
        <td><BookMark status={bookmark} onToggleBookMark={onToggleBookMark} id={_id} /></td>
        <td>{
          <button
            onClick={() => onDelete(_id)}
            className="btn btn-danger">
            Удалить
          </button>}
        </td>
      </tr>
    </>
  )
}

export default User