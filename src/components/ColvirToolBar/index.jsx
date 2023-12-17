import PropTypes from "prop-types";
import classes from "./styles.module.css";
import { BarButton } from "../ui/BarButton/index";
import colvir_logo from "../../assets/colvir_logo.svg";
import {
    BellIcon,
    CardIcon,
    MenuIcon,
    TaskIcon,
    ListIcon,
} from "../ui/BarIcons/index.jsx";
import { useState } from "react";

export function BarPanel({ isOpenPanel, setFieldOpenPanel, isBottom = false }) {
    const [panelState, setPanelState] = useState(isOpenPanel);
    function onCliState(key) {
        setFieldOpenPanel(key, !isOpenPanel[key].open);
        setPanelState(isOpenPanel);
    }
    return (
        <>
            {panelState &&
                Object.keys(isOpenPanel).map((idx) => {
                    if (isOpenPanel[idx].bottom === isBottom) {
                        return (
                            <div
                                key={isOpenPanel[idx].id}
                                onClick={() => onCliState(idx)}
                            >
                                <BarButton
                                    buttonActive={isOpenPanel[idx].open}
                                    disabled={isOpenPanel[idx].disable}
                                    count={isOpenPanel[idx].count}
                                >
                                    {idx === "Bar" && <MenuIcon />}
                                    {idx === "Task" && <TaskIcon />}
                                    {idx === "list" && <ListIcon />}
                                    {idx === "Bell" && <BellIcon />}
                                    {idx === "Card" && <CardIcon />}
                                </BarButton>
                            </div>
                        );
                    }
                })}
        </>
    );
}

export function ColvirToolBar({ isOpenPanel, setFieldOpenPanel }) {
    return (
        <div className={classes.bar}>
            <div className={classes.colvirBox}>
                <img src={colvir_logo} alt="Colvir" />
            </div>
            <div className={classes.buttonBar}>
                <BarPanel
                    isOpenPanel={isOpenPanel}
                    setFieldOpenPanel={setFieldOpenPanel}
                />
            </div>
            <div className={classes.bottomEle}>
                <BarPanel
                    isOpenPanel={isOpenPanel}
                    setFieldOpenPanel={setFieldOpenPanel}
                    isBottom
                />
            </div>
        </div>
    );
}

ColvirToolBar.propTypes = {
    isOpenPanel: PropTypes.any,
    setFieldOpenPanel: PropTypes.any,
};

BarPanel.propTypes = {
    isOpenPanel: PropTypes.any,
    setFieldOpenPanel: PropTypes.any,
    isBottom: PropTypes.bool,
};
