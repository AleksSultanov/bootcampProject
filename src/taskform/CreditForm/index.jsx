import classes from "./styles.module.css";
import { ToolBarForm } from "../../components/ToolBarForm/index";

export function CreditForm() {
    let caption = {
        pathlist: "Договор или продукт, Кредит",
        title: "Продукт: Равномерное распределение ОД",
    };
    return (
        <div className={`${classes.main}`}>
            <div className={`${classes.top}`}>
                <ToolBarForm caption={caption} />
            </div>
            <div className={`${classes.client}`}></div>
            <div className={`${classes.bottom}`}></div>
        </div>
    );
}
