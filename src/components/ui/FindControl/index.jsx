import PropTypes from "prop-types";
import classes from "./styles.module.css";
import close_icon from "../../../assets/close_contr_flow.svg";

export function FindControl({ txtvalue, onSetValue, isFlow }) {
    function onTextChange(event) {
        onSetValue(event.target.value);
    }
    const findtemp = "Найти";

    function onClear() {
        onSetValue("");
    }

    return (
        <>
            <div className={`${classes.box}`}>
                {" "}
                <div
                    className={`${classes.selbox} ${
                        isFlow ? classes.flow : ""
                    }`}
                ></div>
                <input
                    className={`${classes.control} ${
                        isFlow ? classes.flow : ""
                    } `}
                    value={txtvalue}
                    onChange={onTextChange}
                    placeholder={findtemp}
                    maxLength="30"
                ></input>
                <div
                    className={`${classes.close} ${
                        isFlow ? classes.flow : ""
                    } `}
                >
                    <img
                        src={close_icon}
                        className={`${classes.icon}`}
                        alt="Закрыть"
                        onClick={() => onClear()}
                    />
                </div>
            </div>
        </>
    );
}

FindControl.propTypes = {
    txtvalue: PropTypes.string,
    onSetValue: PropTypes.any,
    isFlow: PropTypes.bool,
};
