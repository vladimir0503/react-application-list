import React from 'react'

const TaskInfo = ({
    taskInfo,
    users,
    statuses,
    executor,
    status,
    changeStatus,
    changeExecutor }) => {

    const [statusPopupInit, setStatusPopupInit] = React.useState(false);
    const [usersPopupInit, setUsersPopupInit] = React.useState(false);

    const dateArr = taskInfo.resolutionDatePlan
        ? taskInfo.resolutionDatePlan.split('-')
        : '____-__-__T22:52:45.2219526+03:00'.split('-');

    const date = {
        month: dateArr[1],
        year: dateArr[0],
        number: [...dateArr[2].split('')[0], ...dateArr[2].split('')[1]].join('')
    };

    const handleChangeStatus = id => {
        changeStatus(id);
        setStatusPopupInit(!statusPopupInit);
    };

    const handleChangeExecutor = id => {
        changeExecutor(id);
        setUsersPopupInit(!usersPopupInit);
    };

    console.log(status);
    console.log(executor);

    return (
        <div>
            <div className='statusItem'>
                <div
                    style={{ backgroundColor: `${status.rgb}` }}
                    className='statusRgb'>
                </div>
                <p onClick={() => setStatusPopupInit(!statusPopupInit)} className='statusValue'>{status.name}</p>
                <ul className={`statusPopup ${!statusPopupInit ? 'hide' : ''}`}>
                    {statuses.map(status =>
                        <li onClick={() => handleChangeStatus(status.id)} key={status.id}>
                            <div className='statusRgb' style={{ backgroundColor: `${status.rgb}` }}></div>
                            <p>{status.name}</p>
                        </li>
                    )}
                </ul>
            </div>
            <div className='infoItem'>
                <p className='infoItemName'>Заявитель</p>
                <p className='infoItemValue'>{taskInfo.initiatorName}</p>
            </div>
            <div className='infoItem'>
                <p className='infoItemName'>Создана</p>
                <p className='infoItemValue'>{taskInfo.executorName}</p>
            </div>
            <div className='infoItem'>
                <div className='executorBlock' onClick={() => setUsersPopupInit(!usersPopupInit)}>
                    <p className='infoItemName'>Исполнитель</p>
                    <p className='infoItemValue'>
                        <span>{executor.name}</span>
                    </p>
                </div>
                <ul className={`usersPopup ${!usersPopupInit ? 'hide' : ''}`}>
                    {users.map(user =>
                        <li onClick={() => handleChangeExecutor(user.id)} key={user.id}>
                            <p>{user.name}</p>
                        </li>
                    )}
                </ul>
            </div>
            <div className='infoItem'>
                <p className='infoItemName'>Приоритет</p>
                <p className='infoItemValue'>{taskInfo.taskTypeName}</p>
            </div>
            <div className='infoItem'>
                <p className='infoItemName'>Срок</p>
                <p className='infoItemValue'>{`${date.number}.${date.month}.${date.year}`}</p>
            </div>
            <div className='infoItem'>
                <p className='infoItemName'>Теги</p>
                <div className='tagsBlock'>
                    {!taskInfo && taskInfo.tags.map((t, index) =>
                        <div key={index} className='tag'>
                            <p className='tagName'>{t.name}</p>
                        </div>)}
                </div>
            </div>
        </div>
    );
};

export default TaskInfo;