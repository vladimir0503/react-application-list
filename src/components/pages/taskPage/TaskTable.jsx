import React from 'react'

const TaskTable = ({ tasks, headTable }) => {

    console.log(tasks);
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
                            <tr key={task.id}>
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