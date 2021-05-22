import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../../redux/actions/setTasks'
import TaskChange from './requestsPages/TaskChange';
import TaskCreation from './requestsPages/TaskCreation';
import TaskTable from './TaskTable';


const TasksPage = () => {

    const guid = localStorage.getItem('guid');
    const dispatch = useDispatch();
    const tasks = useSelector(({ taskList }) => taskList.tasks);

    const headTable = ['ID', 'Название', 'Статус', 'Исполнитель'];

    React.useEffect(() => dispatch(fetchTasks(guid)), []);

    return (

        <div className='tasksWrapper'>
            <div className='tasksTableBlock'>
                <div>
                    <div className='btnBlock'>
                        <button className='btn'>Создать заявку</button>
                    </div>
                    <div>
                        <TaskTable tasks={tasks} headTable={headTable} />
                    </div>
                </div>
                {/* <TaskCreation /> */}
                <TaskChange />
            </div>
        </div>
    );
};

export default TasksPage;