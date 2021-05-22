import React from 'react'

const TaskInfo = ({ taskInfo }) => {
    return (
        <div>
            <div className='statusItem'>
                <div
                    style={{ backgroundColor: `${taskInfo.status.color}` }}
                    className='statusRgb'>
                </div>
                <p className='statusValue'>{taskInfo.status.value}</p>
            </div>
            <div className='infoItem'>
                <p className='infoItemName'>Заявитель</p>
                <p className='infoItemValue'>{taskInfo.applicant}</p>
            </div>
            <div className='infoItem'>
                <p className='infoItemName'>Создана</p>
                <p className='infoItemValue'>{taskInfo.create}</p>
            </div>
            <div className='infoItem'>
                <p className='infoItemName'>Исполнитель</p>
                <p className='infoItemValue'>
                    <span>{taskInfo.executor}</span>
                </p>
            </div>
            <div className='infoItem'>
                <p className='infoItemName'>Приоритет</p>
                <p className='infoItemValue'>{taskInfo.prority}</p>
            </div>
            <div className='infoItem'>
                <p className='infoItemName'>Срок</p>
                <p className='infoItemValue'>{taskInfo.time}</p>
            </div>
            <div className='infoItem'>
                <p className='infoItemName'>Теги</p>
                <div className='tagsBlock'>
                    {taskInfo.tags.map(t =>
                        <div className='tag'>
                            <p className='tagName'>{t.name}</p>
                        </div>)}
                </div>
            </div>
        </div>
    );
};

export default TaskInfo;