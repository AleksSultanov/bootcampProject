import PropTypes from "prop-types";
import classes from "./styles.module.css";

export function FindControl({ txtvalue, onSetValue, isFlow }) {
  function onTextChange(event) {
    onSetValue(event.target.value);
  }
  return (
    <input
      className={`${classes.control} ${isFlow ? classes.flow : ""} `}
      placeholder="Найти"
      value={txtvalue}
      onChange={onTextChange}
    ></input>
  );
}

FindControl.propTypes = {
  txtvalue: PropTypes.string,
  onSetValue: PropTypes.any,
  isFlow: PropTypes.bool,
};
