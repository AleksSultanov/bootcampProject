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

export function ColvirToolBar({ isOpenBar, onSetOpenBar }) {
  return (
    <div className={classes.bar}>
      <div className={classes.colvirBox}>
        <img src={colvir_logo} alt="Colvir" />
      </div>
      <div className={classes.buttonBar}>
        <div onClick={() => onSetOpenBar(!isOpenBar)}>
          <BarButton buttonActive={isOpenBar}>
            <MenuIcon />
          </BarButton>
        </div>
        <BarButton count="7">
          <TaskIcon />
        </BarButton>
        <BarButton count="8">
          <ListIcon />
        </BarButton>
        <BarButton count="99">
          <BellIcon />
        </BarButton>
      </div>
      <div className={classes.bottomEle}>
        <BarButton disabled>
          <CardIcon />
        </BarButton>
      </div>
    </div>
  );
}

ColvirToolBar.propTypes = {
  isOpenBar: PropTypes.bool,
  onSetOpenBar: PropTypes.any,
};
