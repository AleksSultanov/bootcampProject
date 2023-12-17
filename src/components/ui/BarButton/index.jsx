import PropTypes from "prop-types";
import classes from "./styles.module.css";
import { useState } from "react";

export function BarButton({
    children,
    count = false,
    disabled,
    buttonActive = false,
}) {
    const [actived, setActived] = useState(buttonActive);
    function onButtonClick() {
        setActived(!actived);
    }
    return (
        <div
            className={`${classes.buttonBox} ${
                disabled ? classes.disable : ""
            } ${actived ? classes.active : ""}`}
            onClick={!disabled ? onButtonClick : null}
        >
            <div
                className={`${classes.buttonImg} ${
                    disabled ? classes.disable : ""
                } ${actived ? classes.active : ""}`}
            >
                {children}
            </div>
            <div
                className={`${classes.buttonCount} ${
                    count ? classes.info : ""
                } ${disabled ? classes.disable : ""} ${
                    actived ? classes.active : ""
                }`}
            >
                <span>{count}</span>
            </div>
        </div>
    );
}

BarButton.propTypes = {
    children: PropTypes.any,
    count: PropTypes.number,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    buttonActive: PropTypes.bool,
};
