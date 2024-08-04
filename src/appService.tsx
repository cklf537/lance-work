
import { Actions, AppState, AppState1 } from "./data/model";
import appData from './data/app_data.json';


const intitalState: AppState = appData;
const appReducer = (state: AppState, action: Actions) => {
    const { type, payload } = action;
    switch (type) {
        case "":
            return {
                ...state,   
                payload
            }
        default:
            return {
                ...state
            }
    }
};

export{intitalState, appReducer};