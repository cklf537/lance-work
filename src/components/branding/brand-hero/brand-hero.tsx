// import img1 from "../../../assets/Screenshot 2024-07-31 at 5.36.10 PM.png"
import img1 from "../../../assets/p3.png"
import { useReducer } from "react";

export default function BrandHero() {

    interface USER{
        name?:string;
        user_id?: number;
    }

    interface CATEGORY{
        name?:string;
        category_id?: number;
    }

    interface INITIALSTATE<USER, CATEGORY>{
        user?: USER;
        category?: CATEGORY;
    }

    interface Action extends INITIALSTATE<USER, CATEGORY>{
        type?:string;
        payload?: INITIALSTATE<USER, CATEGORY>
    }

    const initialState: INITIALSTATE<USER, CATEGORY> = {
        user:{
            name:"Admin",
            user_id: 1
        },
        category:{
            name: "Admin",
            category_id:1
        }
    };

    function reducer(state: INITIALSTATE<USER, CATEGORY>, action: Action): INITIALSTATE<USER, CATEGORY> {
        // const {user, category} = action.payload
        switch(action.type){
            case "INCREMENT":
                return{
                    ...state,
                    user: action.payload?.user,
                    category: action.payload?.category
                }
            default:
                throw new Error();          
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
   
    return (
        <div className="lg:flex p-5">
            <div className={`flex lg:w-1/2 lg:h-1/2 p-5 lg:px-0 justify-center bg-no-repeat min-h-96 bg-auto bg-bottom max-h-dvh rounded-br-lg rounded-tl-lg`} style={{backgroundImage: `url(${img1})`}}>
            </div>
            {`${state && state.category?.name}${state.category?.category_id}`}
            <div className="flex lg:w-1/2 p-5 lg:px-0 items-end">
                <div className="pl-8">
                    <h1 className="text-5xl font-bold pb-5">Refferal,</h1>
                    <h3 className="text-3xl pb-5">Drives Industries with top talent.</h3>
                    <button className="p-2 px-8 text-1xl rounded-full mr-5 bg-purple-600 text-white" onClick={()=>{dispatch({
                        type: "INCREMENT",
                        payload: {
                            user:{name: "User Name",  user_id: 1},
                            category:{name: "USER", category_id:1}
                        }
                    })}}>Reffer</button>
                    <button className="p-2 px-8 text-1xl rounded-full bg-purple-600 text-white">Find refferal</button>
                </div>
            </div>
        </div>
    )
}
