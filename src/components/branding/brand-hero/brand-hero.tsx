// import img1 from "../../../assets/Screenshot 2024-07-31 at 5.36.10 PM.png"
import { Link, NavLink } from "react-router-dom";
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
        <div className="lg:flex">
            <div className={`flex lg:w-1/2 lg:h-1/2 lg:px-0 justify-center bg-no-repeat min-h-96 bg-auto bg-bottom max-h-dvh`} style={{backgroundImage: `url(${img1})`}}>
            </div>
            {/* {`${state && state.category?.name}${state.category?.category_id}`} */}
            <div className="flex lg:w-1/2 lg:pl-8 lg:py-0 items-end text-center justify-center lg:justify-start lg:text-start">
                <div className="pt-5">
                    <h1 className="text-5xl font-bold">Refferal,</h1>
                    <h3 className="text-3xl py-5">Drives Industries with top talent.</h3>
                    {/* <NavLink className="p-2 px-8 text-1xl mr-5 bg-purple-600 text-white" to={`/referal`}>Reffer</NavLink> */}
                    <button className="p-2 px-8 text-1xl mr-5 bg-purple-600 text-white" onClick={()=>{dispatch({
                        type: "INCREMENT",
                        payload: {
                            ...state,
                            user:{name: "User Name",  user_id: 1},
                            category:{name: "USER", category_id:1}
                        }
                    })}}>Reffer</button>
                    <NavLink to="/referal" className="p-2 px-8 text-1xl bg-purple-600 text-white">Find refferal</NavLink>
                </div>
            </div>
        </div>
    )
}
