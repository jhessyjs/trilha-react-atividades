import classes from "./word.module.css";
import classNames from "classnames";


export function Ol(props) {
    const componetClasses =
        [
            classes.display,
            {
                [classes.row]: props.type === "row",
                [classes.column]: props.type === "column"
            }
        ]
    return <ol {...props} className={classNames(componetClasses)}>{props.children}</ol>;
}


export function Li(props) {
    return <li {...props} className={classes.li}>{props.children}</li>;
}


export function Remove(props){
    return <button {...props} className={classes["remove-word"]}>x</button>
}