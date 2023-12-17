import classes from "./styles.module.css";
import { FindControl } from "../ui/FindControl/index";
import { TreePanel } from "../TreePanel/index";
import { useState } from "react";

export function ToolBarPanel() {
    const [toolBarState, setToolBarState] = useState({
        FindTxt: "",
        TaskId: 0,
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

    function onChangeTask(val) {
        setFieldToolBarState("TaskId", val);
    }

    return (
        <div className={classes.box}>
            <div className={classes.find}>
                <FindControl
                    txtvalue={toolBarState.FindTxt}
                    onSetValue={onChangeFind}
                    isFlow
                />
            </div>
            <div className={classes.task}>
                <TreePanel
                    onSetValue={onChangeTask}
                    selectId={toolBarState.TaskId}
                />
            </div>
        </div>
    );
}
