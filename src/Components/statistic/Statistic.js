import React from "react";
import PropTypes from "prop-types";

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>GOOD: {good}</p>
      <p>NEUTRAL: {neutral}</p>
      <p>BAD: {bad}</p>
      <p>TOTAL: {total} </p>
      <p>POSITIVE FEEDBACK: {positivePercentage}%</p>
    </div>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
export default Statistic;
