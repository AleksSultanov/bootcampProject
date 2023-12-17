import classes from "./styles.module.css";
import PropTypes from "prop-types";

export function CaptionTitle({ children }) {
    return (
        <>
            <div className={classes.title}>{children}</div>
        </>
    );
}

CaptionTitle.prototype = {
    children: PropTypes.string,
};
