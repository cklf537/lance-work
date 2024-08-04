import { createContext } from "react";
import { Category, Posts } from "./model";

const PostContext = createContext<Posts[]>([]);
const Categories = createContext<Category[]>([])
const AppContext = createContext({});
export {PostContext, Categories, AppContext};