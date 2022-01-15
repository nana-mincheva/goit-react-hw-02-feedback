import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOption.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((item) => (
        <button
          className={s.btn}
          key={item}
          name={item}
          type="button"
          onClick={onLeaveFeedback}
        >
          {item}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;
