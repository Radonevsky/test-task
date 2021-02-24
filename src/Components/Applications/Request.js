import s from "./Request.module.css";
import React, {useEffect} from "react";



const Request = (props) => {

    let nameApp = props.name;
    if (props.name.length > 86) {
        nameApp = props.name.substring(0, 85) + '...';
    }

const activateEditWindow = () => {
    props.activateEditMode(props);
}
    return (
        <>
            <div className={s.columnsWrapper} onClick={activateEditWindow}>
                <span style={{backgroundColor: props.priority.rgb}} className={s.priorityContainer}>
                </span>
                <span className={s.id}>{props.id}</span>

                <div className={s.containerName}>
                    <div className={s.name}>
                        <span>{nameApp}</span>
                    </div>
                </div>
                <span className={s.statusContainer}>
                    <div style={{backgroundColor: props.statusRgb}} className={s.statusApp}>
                         <div>
                             {props.statusName}
                         </div>
                    </div>
                </span>
                <span className={s.itemValue}>{props.executorName}</span>
            </div>
        </>
    )
}

export default Request;