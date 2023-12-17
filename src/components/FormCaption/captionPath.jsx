import classes from "./styles.module.css";
import PropTypes from "prop-types";

export function CaptionPath(captionlist) {
    let list = captionlist.captionlist.split(",");
    return (
        <ul className={classes.box}>
            {list.map((item, idx) => {
                return (
                    <li key={idx} className={classes.item}>
                        {item}
                    </li>
                );
            })}
        </ul>
    );
}

CaptionPath.prototype = {
    captionlist: PropTypes.string,
};
