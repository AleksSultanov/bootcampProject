import classes from "./styles.module.css";
import img_demo from "../../assets/Demo/TaskPanel.png";

export function ToolTaskPanel() {
    return (
        <div className={classes.box}>
            <img className={classes.demo} src={img_demo} />
        </div>
    );
}
