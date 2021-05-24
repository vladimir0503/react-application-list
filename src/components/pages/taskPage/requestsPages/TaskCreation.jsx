import React from 'react';
import { close } from '../../../../assets/images';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { fetchData } from '../../../../redux/actions/getData';
import { postTask } from '../../../../redux/actions/createTask';
import { addTaskInfo } from '../../../../redux/actions/addTaskInfo';

const TaskCreation = () => {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    const guid = localStorage.getItem('guid');

    const dispatch = useDispatch();
    const history = useHistory();

    const createTask = async () => {
        const newTask = {
            name,
            description
        };

        await postTask(guid, newTask)(dispatch);
        const val = await fetchData(guid)(dispatch);
        dispatch(addTaskInfo(val));

        history.push('/applications/task-change');
        setName('');
        setDescription('');
    };

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
                <button onClick={createTask} className='btn newTaskBtn'>Сохранить</button>
            </div>
        </div>
    );
};

export default TaskCreation;
