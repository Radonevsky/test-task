import {applicationsAPI} from "../api/api";

const NEW_APPLICATION = 'NEW_APPLICATION';
const SET_APPLICATIONS = 'SET_APPLICATIONS';
const SET_PRIORITIES = 'SET_PRIORITIES';
const SET_NEW_APP_ID = 'SET_NEW_APP_ID';

let initialState = {
    applications: [],
    priorities: [],
};

const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_APPLICATION: {
            let newApplication = {
                id: action.id,
                name: action.name,
                description: action.description
            };
            return {
                ...state,
                applications: [...state.applications, (newApplication)],
            }
        }
        case SET_APPLICATIONS: {
            return {...state, applications: action.applications}
        }
        case SET_PRIORITIES: {
            return {...state, priorities: action.priorities}
        }

        default:
            return state;
    }
}

export const addNewApplication = (id, name, description) => ({
    type: NEW_APPLICATION,
    id, name, description});
export const setApplications = (applications) => ({
    type: SET_APPLICATIONS,
    applications
})
export const setPriorities = (priorities) => ({
    type: SET_PRIORITIES,
    priorities
})


export const getApplications = () =>
    async (dispatch) => {
        let response = await applicationsAPI.getApplications();
        dispatch(setApplications(response.data.value));
    }
export const getPriorities = () =>
    async (dispatch) => {
        let response = await applicationsAPI.getPriorities();
        dispatch(setPriorities(response.data));
    }
export const addAppComment = (comment, appId, statusId, executorId) =>
    async (dispatch) => {
        let response = await applicationsAPI.addComment(comment, appId, statusId, executorId);
        if(response.status === 200) {
            dispatch(getApplications());
        } else {
            console.log('server error')
        }
    }
export const addNewApp = (name, comment) =>
    async (dispatch) => {
        let response = await applicationsAPI.addNewApp(name, comment);
        dispatch(addNewApplication(response.data, name, comment));
    }


export default applicationReducer;
