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
    },
    isLoading: false
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
                taskInfo: action.payload,
                isLoading: false
            }

        case 'IS_LOADING':
            return {
                ...state,
                isLoading: true
            }

        default:
            return state
    }
};

export default taskList;