import React from 'react';
import { useHistory } from 'react-router-dom';
import { fetchTaskInfo } from '../../../redux/actions/addTaskInfo';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../Loader';

const TaskTable = ({ tasks, headTable }) => {

    const priorities = useSelector(({ taskList }) => taskList.priorities);

    const dispatch = useDispatch();
    const history = useHistory();

    const guid = localStorage.getItem('guid');

    const addInfo = async id => {
        await fetchTaskInfo(guid, id)(dispatch);
        history.push('/applications/task-change');
    };

    const addPriorityColor = id => {
        const currentPr = priorities.filter(p => p.id === id);
        return { borderLeft: `4px solid ${currentPr[0].rgb}` }
    };

    return (
        <div className='tableWrapper'>
            <table>
                <thead>
                    <tr>
                        {headTable.map((item, i) => <th key={i}><p>{item}</p></th>)}
                    </tr>
                </thead>
                <tbody>
                    {!tasks.length
                        ? <div className='loaderWrapper'>
                            <Loader style='ldLarge' />
                        </div>
                        : tasks.map(task =>
                            <tr onClick={() => addInfo(task.id)} key={task.id}>
                                <td style={addPriorityColor(task.priorityId)}>
                                    <p>{task.id}</p>
                                </td>
                                <td><p>{task.name}</p></td>
                                <td>
                                    <div
                                        style={{ backgroundColor: `${task.statusRgb}` }}
                                        className='statusBlock'>
                                        {task.statusName}
                                    </div>
                                </td>
                                <td><p>{task.executorName}</p></td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
};

export default TaskTable;