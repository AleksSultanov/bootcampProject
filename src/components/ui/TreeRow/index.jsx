import PropTypes from "prop-types";
import classes from "./styles.module.css";
import { GroupField } from "./styles";
import img_folder from "../../../assets/tree/folder.svg";
import img_folder_open from "../../../assets/tree/folder-open.svg";
import img_item from "../../../assets/tree/item.svg";
import img_flag from "../../../assets/tree/flag.svg";

export function TreeRow({
    id,
    txtvalue,
    level,
    isGoup,
    isOpen,
    isFlow,
    isSelect,
    isFlag,
}) {
    return (
        <div className={`${classes.box}`} key={id}>
            <GroupField level={level}>
                <img
                    src={
                        isGoup && isOpen
                            ? img_folder_open
                            : isGoup && !isOpen
                            ? img_folder
                            : img_item
                    }
                    className={`${classes.imgfolder}`}
                />
            </GroupField>
            <div className={`${classes.txt} ${isFlow ? classes.flow : ""} `}>
                {txtvalue}
            </div>
            <div>
                <img
                    src={img_flag}
                    className={`${classes.imgflag} ${
                        isFlow ? classes.flow : ""
                    } ${isFlag ? classes.flag : ""}`}
                />
            </div>

            <div
                className={`${classes.selbox} ${
                    isSelect ? classes.active : ""
                }`}
            ></div>
        </div>
    );
}

TreeRow.propTypes = {
    id: PropTypes.number,
    txtvalue: PropTypes.string,
    level: PropTypes.number,
    isGoup: PropTypes.bool,
    isOpen: PropTypes.bool,
    isFlow: PropTypes.bool,
    isSelect: PropTypes.bool,
    isFlag: PropTypes.bool,
};
