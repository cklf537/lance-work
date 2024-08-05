
import { Actions, AppState, Category, Groups, NavItems, Users} from "./data/model";
import appData from './data/app_data.json';


const intitalState: AppState<Users, Groups, NavItems, Category> = appData;
const appReducer = (state: AppState<Users, Groups, NavItems, Category>, action: Actions) => {
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