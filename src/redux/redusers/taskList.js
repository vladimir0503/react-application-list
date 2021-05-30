const initialState = {
    tasks: [],
    statuses: [],
    users: [],
    taskInfo: {
        statusId: '',
        statusName: '',
        statusRgb: '',
        executorId: '',
        executorName: ''
    },
};

const taskList = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state,
                tasks: action.payload.tasks,
                statuses: action.payload.statuses,
                users: action.payload.users
            }

        case 'ADD_TASK_INFO':
            return {
                ...state,
                taskInfo: { ...state.tasks.filter(task => task.id === action.payload)[0] }
            }


        default:
            return state
    }
};

export default taskList;