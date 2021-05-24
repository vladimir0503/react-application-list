import React from 'react';
import { useHistory } from 'react-router-dom';
import { addTaskInfo } from '../../../redux/actions/addTaskInfo';
import { useSelector, useDispatch } from 'react-redux';

const TaskTable = ({ tasks, headTable }) => {

    const state = useSelector(state => state.taskList.taskInfo);
    const dispatch = useDispatch();
    const history = useHistory();

    const addInfo = id => {
        dispatch(addTaskInfo(id));
        history.push('/applications/task-change');
    };

    return (
        <div>
            : <table>
                <thead>
                    <tr>
                        {headTable.map((item, i) => <th key={i}><p>{item}</p></th>)}
                    </tr>
                </thead>
                <tbody>
                    {!tasks.length
                        ? 'Loading...'
                        : tasks.map(task =>
                            <tr onClick={() => addInfo(task.id)} key={task.id}>
                                <td><p>{task.id}</p></td>
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