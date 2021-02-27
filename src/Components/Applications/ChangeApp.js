import React, {useEffect, useState} from 'react';
import s from './ChangeApp.module.css'
import close from '../../assets/close.png'

const ChangeApp = (props) => {
    const [comment, setComment] = useState(null);
    useEffect(() => {

        },
        [props.newAppId],
    );

    const onCommentChange = (e) => {
        setComment(e.currentTarget.value);
    }
    const sendComment = () => {
    props.addAppComment(comment, props.currentApp.id, props.currentApp.statusId, props.currentApp.executorId)
        props.deactivateEditMode();
    }

    let appName = props.currentApp.name;
    if (appName.length > 140) {
        appName = appName.substring(0, 139) + '...';
    }


    return (
        <div className={s.changeAppWindow}>
            <div className={s.head}>
                <span className={s.title}>№{props.currentApp.id}</span>
                <span className={s.appName}><div>{appName}</div></span>
                <span className={s.close} onClick={props.deactivateEditMode}><img src={close} alt="close"/></span>
            </div>
            <div className={s.bodyGrid}>
                <div className={s.descriptionAndComments}>
                    <div className={s.description}>
                        <div>Описание</div>
                        <div className={s.descriptionBody}>{props.currentApp.description}</div>
                        <div className={s.addComment}>Добавление комментариев</div>
                        <textarea className={s.addComment} onChange={onCommentChange} value={comment}/>
                        <button>
                            <div className={s.saveButtonDiv} onClick={sendComment}>Сохранить</div>
                        </button>
                    </div>
                    <div className={s.comments}>
                        <span className={s.commentator}>{props.currentApp.initiatorName}</span>
                        <span> прокомментировал {props.currentApp.createdAt.substring(0, 10)} в </span>
                        <span>{props.currentApp.createdAt.substring(11, 16)}:</span>
                        <div>{props.currentApp.description}</div>
                    </div>
                </div>
                <div className={s.info}>

                </div>
            </div>

        </div>
    )
}

export default ChangeApp;