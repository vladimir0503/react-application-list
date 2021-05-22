export const fetchTasks = guid => async dispatch => {
    const res = await fetch(`http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=${guid}`);
    const tasks = await res.json();
    const arr = [...tasks.value, ...tasks.value, ...tasks.value];
    dispatch(setTasks(arr));
    // dispatch(setTasks(tasks.value));
};

export const setTasks = tasks => ({
    type: 'SET_TASKS',
    payload: tasks
});