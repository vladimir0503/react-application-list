export const postTask = (guid, obj) => async dispatch => {
    await fetch(`http://intravision-task.test01.intravision.ru/api/${guid}/Tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;odata.metadata=minimal;odata.streaming=true'
        },
        body: JSON.stringify(obj)
    });
    dispatch(createTask(obj));
};

export const createTask = obj => ({
    type: 'CREATE_TASK',
    payload: obj
});