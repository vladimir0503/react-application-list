export const fetchTaskInfo = (guid, taskId) => async dispatch => {
    const res = await fetch(`http://intravision-task.test01.intravision.ru/api/${guid}/Tasks/${taskId}`);
    const data = await res.json()
    dispatch(addTaskInfo(data));
};

export const addTaskInfo = obj => ({
    type: 'ADD_TASK_INFO',
    payload: obj
});