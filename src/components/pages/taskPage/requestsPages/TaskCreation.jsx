import React from 'react';
import { close } from '../../../../assets/images';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../../../redux/actions/getData';
import { postTask } from '../../../../redux/actions/createTask';
import { fetchTaskInfo } from '../../../../redux/actions/addTaskInfo';
import { loadingInit } from '../../../../redux/actions/loadingInit';
import Loader from '../../../Loader';


const TaskCreation = () => {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    const guid = localStorage.getItem('guid');

    const isLoading = useSelector(({ taskList }) => taskList.isLoading);
    const dispatch = useDispatch();
    const history = useHistory();

    const createTask = async () => {
        const newTask = {
            name,
            description
        };

        dispatch(loadingInit());
        await postTask(guid, newTask)(dispatch);
        const id = await fetchData(guid)(dispatch);
        await fetchTaskInfo(guid, id)(dispatch);

        history.push('/applications/task-change');
        setName('');
        setDescription('');
    };

    console.log(isLoading);

    return (
        <div className='newTaskBlock'>
            <div className='newTaskHeader'>
                <p>Новая задача</p>
                <Link to='/applications'>
                    <img src={close}></img>
                </Link>
            </div>
            <div className='textAreaWrapper'>
                <div className='textAreaBlock'>
                    <label>Название</label>
                    <textarea
                        onChange={e => setName(e.target.value)}
                        className='textAreaName'
                        value={name}
                    >
                    </textarea>
                </div>
                <div className='textAreaBlock'>
                    <label>Описание</label>
                    <textarea
                        onChange={e => setDescription(e.target.value)}
                        className='textAreaDescription'
                        value={description}
                    >
                    </textarea>
                </div>
                <button onClick={createTask} className='btn newTaskBtn'>
                    {isLoading ? <Loader style='ldSmall' /> : 'Сохранить'}
                </button>
            </div>
        </div>
    );
};

export default TaskCreation;
