import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, onToggleBookMark, id }) => {
  return (
    <button onClick={() => onToggleBookMark(id)}>
      <i className={"bi bi-bookmark" + (status ? "-fill" : "")}></i>
    </button>
  );
};

BookMark.propTypes = {
  status: PropTypes.bool.isRequired,
  onToggleBookMark: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default BookMark;
