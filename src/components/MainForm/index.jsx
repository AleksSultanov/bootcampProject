import classes from "./styles.module.css"
import { ColvirToolBar } from "../ColvirToolBar/index"
import { ToolBarPanel } from "../ToolBarPanel/index"
import { useState } from "react"

export function MainForm() {
    const [isOpenPanel, setOpenPanel] = useState({
        Bar: true,
        Task: false,
    })

    function setFieldOpenPanel(key, value) {
        setOpenPanel({
            ...isOpenPanel,
            [key]: value,
        })
    }

    function onOpenBar(val) {
        setFieldOpenPanel("Bar", val)
    }

    return (
        <div
            className={`${classes.main}  ${
                isOpenPanel.Bar ? classes.openbar : ""
            }`}
        >
            <div
                className={`${classes.bar}  ${
                    isOpenPanel.Bar ? classes.openbar : ""
                }`}
            >
                <ColvirToolBar
                    isOpenBar={isOpenPanel.Bar}
                    onSetOpenBar={onOpenBar}
                />
            </div>
            <div
                className={`${classes.panel}  ${
                    isOpenPanel.Bar ? classes.openbar : ""
                }`}
            >
                <ToolBarPanel />
            </div>
            <div></div>
        </div>
    )
}
