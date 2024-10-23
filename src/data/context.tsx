import { createContext } from "react";
import { Category, Posts } from "./model";

const PostContext = createContext<Posts[]>([]);
const CategoryContext = createContext<Category[]>([])
const AppContext = createContext({});
export {PostContext, CategoryContext, AppContext};