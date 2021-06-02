import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { close } from '../../../../assets/images';
import Comments from './Comments';
import TaskInfo from './TaskInfo';
import { Link } from 'react-router-dom';
import { fetchData } from '../../../../redux/actions/getData';
import { fetchTaskInfo } from '../../../../redux/actions/addTaskInfo';
import { loadingInit } from '../../../../redux/actions/loadingInit';
import Loader from '../../../Loader';


const TaskChange = () => {
    const { taskInfo, statuses, users } = useSelector(state => state.taskList);
    const isLoading = useSelector(({ taskList }) => taskList.isLoading);

    const [comment, setComment] = React.useState('');
    const [status, setStatus] = React.useState({
        id: taskInfo.statusId,
        name: taskInfo.statusName,
        rgb: taskInfo.statusRgb
    });
    const [executor, setExecutor] = React.useState({
        id: taskInfo.executorId,
        name: taskInfo.executorName
    });

    const guid = localStorage.getItem('guid');

    const dispatch = useDispatch();

    const putTask = async () => {
        const body = {
            id: taskInfo.id,
            comment,
            statusId: status.id,
            executorId: executor.id
        };

        await fetch(`http://intravision-task.test01.intravision.ru/api/${guid}/Tasks`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;odata.metadata=minimal;odata.streaming=true'
            },
            body: JSON.stringify(body)
        });
        fetchData(guid)(dispatch);
    };

    const changeStatus = id => {
        setStatus({ ...statuses.filter(status => status.id === id)[0] });
    };

    const changeExecutor = id => {
        setExecutor({ ...users.filter(user => user.id === id)[0] });
    };

    const addComment = async () => {
        dispatch(loadingInit());
        await putTask();
        dispatch(fetchTaskInfo(guid, taskInfo.id));
        setComment('');
    };

    React.useEffect(() => putTask(), [status, executor]);

    return (
        <div className='newTaskBlock'>
            <div className='newTaskHeader'>
                <div>
                    <p>№ {taskInfo.id}</p>
                    <p>{taskInfo.name}</p>
                </div>
                <Link to='/applications'>
                    <img src={close} alt='close'></img>
                </Link>
            </div>
            <div className='taskChangeContent'>
                <div className='commentsBlock'>
                    <div className='descriptionWrapper'>
                        <div className='description'>
                            <p className='title'>Описание</p>
                            <p>{taskInfo.description}</p>
                        </div>
                        <div className='addCommentBlock'>
                            <div className='textAreaBlock'>
                                <label>Добавление коментариев</label>
                                <textarea
                                    className='texAreaComment'
                                    value={comment}
                                    onChange={e => setComment(e.target.value)}
                                >
                                </textarea>
                            </div>
                            <button onClick={addComment} className='btn saveBtn'>
                                {isLoading ? <Loader style='ldSmall' /> : 'Сохранить'}
                            </button>
                        </div>
                        <Comments comments={taskInfo.lifetimeItems} />
                    </div>
                </div>
                <div className='infoBlock'>
                    <TaskInfo
                        taskInfo={taskInfo}
                        users={users}
                        statuses={statuses}
                        executor={executor}
                        status={status}
                        changeStatus={changeStatus}
                        changeExecutor={changeExecutor}
                    />
                </div>
            </div>
        </div>
    );
};

export default TaskChange;