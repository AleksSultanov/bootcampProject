import classes from "./styles.module.css";
import { ColvirToolBar } from "../ColvirToolBar/index";
import { ToolBarPanel } from "../ToolBarPanel/index";
import { ToolTaskPanel } from "../ToolTaskPanel/index";
import { CreditForm } from "../../taskform/CreditForm/index";
import { ToolBarData, setBarClose, isOpenBar } from "../../Data/ToolBar";
import { useState } from "react";

export function MainForm() {
    const [isOpenPanel, setOpenPanel] = useState(ToolBarData);

    const [OpenBar, setOpenBar] = useState(true);

    function setBarClosePanel() {
        let isOpenPanel_tmp = setBarClose(isOpenPanel);
        setOpenPanel(isOpenPanel_tmp);
    }

    function isOpenBarPanel() {
        let isOpen = isOpenBar(isOpenPanel);
        setOpenBar(isOpen);
    }

    function setFieldOpenPanel(key, value) {
        if (value) {
            setBarClosePanel();
        }
        let isOpenPanel_tmp = isOpenPanel;
        isOpenPanel_tmp[key].open = value;
        setOpenPanel(isOpenPanel_tmp);
        isOpenBarPanel();
    }

    return (
        <div className={`${classes.main}  ${OpenBar ? classes.openbar : ""}`}>
            <div
                className={`${classes.bar}  ${OpenBar ? classes.openbar : ""}`}
            >
                <ColvirToolBar
                    isOpenPanel={isOpenPanel}
                    setFieldOpenPanel={setFieldOpenPanel}
                />
            </div>
            <div
                className={`${classes.panel}  ${
                    OpenBar ? classes.openbar : ""
                }`}
            >
                {isOpenPanel.Bar.open && <ToolBarPanel />}
                {isOpenPanel.Task.open && <ToolTaskPanel />}
            </div>
            <div
                className={`${classes.form}  ${OpenBar ? classes.openbar : ""}`}
            >
                <CreditForm />
            </div>
        </div>
    );
}
