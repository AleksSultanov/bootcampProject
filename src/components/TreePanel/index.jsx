import classes from "./styles.module.css";
import { TreeRow } from "../ui/TreeRow/index";
import PropTypes from "prop-types";
import { useState } from "react";
import { Tasklist, setOpenCloseTask } from "../../Data/Tasks";

export function TreePanel(onSetValue, selectId) {
    const [selectCurId, setIsSelect] = useState(selectId);

    function onSettask(id) {
        onSetValue.onSetValue(id);
        setIsSelect(id);
    }
    function onSetDbltask(id) {
        onSettask(id);
        setOpenCloseTask(id);
    }

    let visibleTask = Tasklist.filter((task) => task.visible);
    let isTask = visibleTask.length > 0;
    return (
        <div className={classes.box}>
            {isTask > 0 &&
                visibleTask.map((task) => {
                    return (
                        <div
                            onDoubleClick={() => onSetDbltask(task.id)}
                            onClick={() => onSettask(task.id)}
                            key={task.id}
                        >
                            <TreeRow
                                key={task.id}
                                id={task.id}
                                txtvalue={task.name}
                                level={task.level}
                                isGoup={task.isGoup}
                                isOpen={task.isOpen}
                                isFlow
                                isSelect={
                                    selectCurId === task.id ? true : false
                                }
                                isFlag={task.isFlag}
                            />{" "}
                        </div>
                    );
                })}
        </div>
    );
}

TreePanel.propTypes = {
    onSetValue: PropTypes.func,
    selectId: PropTypes.number,
};
