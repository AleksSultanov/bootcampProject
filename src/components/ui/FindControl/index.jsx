import PropTypes from "prop-types"
import classes from "./styles.module.css"
import close_icon from "../../../assets/close_contr_flow.svg"

export function FindControl({ txtvalue, onSetValue, isFlow }) {
    function onTextChange(event) {
        onSetValue(event.target.value)
    }
    const findtemp = "Найти"
    if (txtvalue.trim() === "") {
        txtvalue = findtemp
    }

    return (
        <>
            <div className={`${classes.box}`}>
                <div className={`${classes.innerInput} `}>
                    <div
                        className={`${classes.txt} ${
                            isFlow ? classes.flow : ""
                        } `}
                    >
                        {txtvalue}
                    </div>
                    <div
                        className={`${classes.close} ${
                            isFlow ? classes.flow : ""
                        } `}
                    >
                        <img
                            src={close_icon}
                            className={`${classes.icon}`}
                            alt="Закрыть"
                        />
                    </div>
                </div>
                <div
                    className={`${classes.control} ${
                        isFlow ? classes.flow : ""
                    } `}
                ></div>

                <input
                    className={`${classes.control} ${
                        isFlow ? classes.flow : ""
                    } ${classes.fake}`}
                    value={txtvalue}
                    onChange={onTextChange}
                    maxLength="30"
                ></input>
            </div>
        </>
    )
}

FindControl.propTypes = {
    txtvalue: PropTypes.string,
    onSetValue: PropTypes.any,
    isFlow: PropTypes.bool,
}
