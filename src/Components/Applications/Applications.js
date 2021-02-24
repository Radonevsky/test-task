import React, {useEffect, useState} from 'react';
import s from './Applications.module.css'
import Request from "./Request";
import {connect} from "react-redux";
import {
    addAppComment,
    addNewApp,
    addNewApplication,
    getApplications,
    getPriorities
} from "../../Redux/applications-reducer";
import CreateApp from "./CreateApp";
import ChangeApp from "./ChangeApp";

const Applications = (props) => {

    const [createMode, setCreateMode] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [currentApp, setCurrentApp] = useState(null);

    useEffect(() => {
            props.getPriorities();
            props.getApplications();
        },
        [props.applications.length],
    );
    const activateCreateMode = () => {
        deactivateEditMode();
        setCreateMode(true);
    }
    const deactivateCreateMode = () => {
        setCreateMode(false);
    }

    const activateEditMode = (currentApp) => {
        deactivateCreateMode();
        setCurrentApp(currentApp)
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
    }


    const identifierPriority = (array, priorityId) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i].id === priorityId) {
                return array[i]
            } else {
                return {rgb: 'pink'}
            }
        }
    }
    let applicationsElements = props.applications.map(a =>
        <Request activateEditMode={activateEditMode} id={a.id} name={a.name}
                 executor={a.executor} key={a.id} description={a.description} initiatorName={a.initiatorName}
                 statusName={a.statusName} statusRgb={a.statusRgb} executorName={a.executorName}
                 createdAt={a.createdAt} statusId={a.statusId} executorId={a.executorId}

                 priority={identifierPriority(props.priorities, a.priorityId)}/>);
    return (
        <div className={s.applications}>
            <div className={s.head}>
                <button onClick={activateCreateMode}>
                    <div className={s.nameButton}>Создать заявку</div>
                </button>
                <div className={s.columnsWrapper}>
                    <span className={s.id}>ID</span>
                    <span className={s.itemName}>Название</span>
                    <span className={s.itemName}>Статус</span>
                    <span className={s.itemName}>Исполнитель</span>
                </div>
                <div className={s.bottomBorder}></div>
                {applicationsElements}
            </div>
            {createMode &&
            <CreateApp  addNewApp={props.addNewApp} deactivateCreateMode={deactivateCreateMode}/>}
            {editMode &&
            <ChangeApp addAppComment={props.addAppComment} deactivateEditMode={deactivateEditMode} currentApp={currentApp}/>}
        </div>
    )
}

let mapStateToProps = (state) => {

    return {
        applications: state.applicationsPage.applications,
        priorities: state.applicationsPage.priorities
    }
};

export default connect(mapStateToProps, {addNewApplication, getApplications,
    getPriorities, addAppComment, addNewApp})
(Applications);
