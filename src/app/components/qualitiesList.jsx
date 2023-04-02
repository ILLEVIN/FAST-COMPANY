import React from "react";
import ProptTypes from "prop-types";
import Qualitie from "./qualities";

const QualitiesList = ({ qualities }) => {
  return (
    <>
      {qualities.map((q) => (
        <Qualitie key={q._id} name={q.name} color={q.color} />
      ))}
    </>
  );
};

QualitiesList.propTypes = {
  qualities: ProptTypes.array.isRequired
};

export default QualitiesList;
