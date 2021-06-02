import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../redux/actions/getData'
import TaskChange from './requestsPages/TaskChange';
import TaskCreation from './requestsPages/TaskCreation';
import TaskTable from './TaskTable';
import { Route, Link } from 'react-router-dom';

const TasksPage = () => {

    const guid = localStorage.getItem('guid');
    const dispatch = useDispatch();
    const tasks = useSelector(({ taskList }) => taskList.tasks);

    const headTable = ['ID', 'Название', 'Статус', 'Исполнитель'];

    React.useEffect(() => dispatch(fetchData(guid)), []);

    return (

        <div className='tasksWrapper'>
            <div className='tasksTableBlock'>
                <div>
                    <div className='btnBlock'>
                        <Link to='/applications/task-creation'>
                            <button className='btn'>Создать заявку</button>
                        </Link>
                    </div>
                    <div>
                        <TaskTable tasks={tasks} headTable={headTable} />
                    </div>
                </div>
            </div>
            <Route path='/applications/task-creation' component={TaskCreation} />
            <Route path='/applications/task-change' component={TaskChange} />
        </div>
    );
};

export default TasksPage;