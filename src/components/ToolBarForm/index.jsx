import classes from "./styles.module.css";
import { FindControl } from "../ui/FindControl/index";
import { CaptionPath } from "../FormCaption/captionPath";
import { CaptionTitle } from "../FormCaption/captionTitle";
import img_close from "../../assets/form/close.svg";
import img_save from "../../assets/form/save.svg";
import { useState } from "react";

export function ToolBarForm(caption) {
    const [toolBarState, setToolBarState] = useState({
        FindTxt: "",
    });

    function setFieldToolBarState(key, value) {
        setToolBarState({
            ...toolBarState,
            [key]: value,
        });
    }

    function onChangeFind(val) {
        setFieldToolBarState("FindTxt", val);
    }

    return (
        <div className={classes.box}>
            <div className={classes.caption}>
                <div className={classes.path}>
                    <CaptionPath captionlist={caption.caption.pathlist} />
                </div>
                <div className={classes.title}>
                    <CaptionTitle>{caption.caption.title}</CaptionTitle>
                </div>
            </div>
            <div className={classes.buttons}>
                <div className={classes.buttonslist}>
                    <img className={classes.icon} src={img_save} />
                </div>

                <div className={classes.find}>
                    <FindControl
                        txtvalue={toolBarState.FindTxt}
                        onSetValue={onChangeFind}
                    />
                </div>

                <div className={classes.separator}></div>
                <div className={classes.close}>
                    <img className={classes.icon} src={img_close} />
                </div>
            </div>
        </div>
    );
}
