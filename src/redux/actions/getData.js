const dataUrl = 'http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=';
const apiUrl = 'http://intravision-task.test01.intravision.ru/api';

export const fetchData = guid => async dispatch => {
    const resTasks = await fetch(`${dataUrl}${guid}`);
    const tasks = await resTasks.json();

    const resUsers = await fetch(`${apiUrl}/${guid}/Users`);
    const users = await resUsers.json();

    const resStatuses = await fetch(`${apiUrl}/${guid}/Statuses`);
    const statuses = await resStatuses.json();

    const resPriorities = await fetch(`${apiUrl}/${guid}/Priorities`);
    const priorities = await resPriorities.json();

    const data = {
        tasks: tasks.value,
        users,
        statuses,
        priorities
    };

    dispatch(getData(data));
    return tasks.value[tasks.value.length - 1].id;
};

export const getData = tasks => ({
    type: 'GET_DATA',
    payload: tasks
});