import React, {useEffect, useState} from 'react';
import s from './CreateApp.module.css'
import close from '../../assets/close.png'

const CreateApp = (props) => {
    const [newName, setNewName] = useState(null);
    const [newComment, setNewComment] = useState(null);

    const onNewCommentChange = (e) => {
        setNewComment(e.currentTarget.value);
    }
    const onNewNameChange = (e) => {
        setNewName(e.currentTarget.value);
    }
    const sendNewApp = () => {
    props.addNewApp(newName, newComment);
    props.deactivateCreateMode();
    }

    return (
        <div className={s.createAppWindow}>
            <div className={s.head}>
                <span className={s.title}>Новая заявка</span>
                <span className={s.close} onClick={props.deactivateCreateMode}><img src={close} alt="close"/></span>
            </div>
            <div className={s.name}>
                <div>Название</div>
                <textarea onChange={onNewNameChange} value={newName}/>
            </div>
            <div className={s.description}>
                <div>Описание</div>
                <textarea onChange={onNewCommentChange} value={newComment}/>
            </div>
            <button onClick={sendNewApp}>
                <div className={s.saveButton}>Сохранить</div>
            </button>
        </div>
    )
}

export default CreateApp;