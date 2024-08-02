// import img1 from "../../../assets/Screenshot 2024-07-31 at 5.36.10 PM.png"
import img1 from "../../../assets/p3.png"
import { Categories } from "../../../data/context";
import { useReducer } from "react";

interface USER {
    name?: string;
    user_id?: number;
    key?: string;
    display_name?: string;
   }
   
   interface CATEGORY{
    name: string;
    category_id: number;
   }
  
   interface AppState<USER, CATEGORY>{
      users?: USER;
      categories?: CATEGORY; 
   } 
  
   interface Action{
    type?: string;
    payload?: CATEGORY
   }
  
   const intialState: AppState<USER[], CATEGORY[]> = {}
  
   const AppReducer = (state: AppState<USER[], CATEGORY[]>, action: Action) => {
      switch (action.type){
        case "INCREMENT":
            return{
                ...state,
                categories: action.payload
            }
            // state.categories = [{name: "", category_id: 1}]
      }
   }

export default function BrandHero() {

    const [state, dispatch] = useReducer(AppReducer, intialState, "");

    return (
        <div className="lg:flex p-5">
            <div className={`flex lg:w-1/2 lg:h-1/2 p-5 lg:px-0 justify-center bg-no-repeat min-h-96 bg-auto bg-bottom max-h-dvh rounded-br-lg rounded-tl-lg`} style={{backgroundImage: `url(${img1})`}}>
            </div>
            <div className="flex lg:w-1/2 p-5 lg:px-0 items-end">
                <div className="pl-8">
                    <h1 className="text-5xl font-bold pb-5">Refferal,</h1>
                    <h3 className="text-3xl pb-5">Drives Industries with top talent.</h3>
                    <button className="p-2 px-8 text-1xl rounded-full mr-5 bg-purple-600 text-white" onClick={()=>{dispatch({
                        type: "INCREMENT",
                        payload: {name:"Some category", category_id: 2}
                    })}}>Reffer</button>
                    <button className="p-2 px-8 text-1xl rounded-full bg-purple-600 text-white">Find refferal</button>
                </div>
            </div>
        </div>
    )
}
