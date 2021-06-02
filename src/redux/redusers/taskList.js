const initialState = {
    tasks: [],
    statuses: [],
    users: [],
    priorities: [],
    taskInfo: {
        statusId: '',
        statusName: '',
        statusRgb: '',
        executorId: '',
        executorName: ''
    }
};

const taskList = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state,
                tasks: action.payload.tasks,
                statuses: action.payload.statuses,
                users: action.payload.users,
                priorities: action.payload.priorities
            }

        case 'ADD_TASK_INFO':
            return {
                ...state,
                taskInfo: action.payload
            }

        default:
            return state
    }
};

export default taskList;