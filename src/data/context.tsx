import { createContext } from "react";
import { Category, Posts } from "./model";

const PostContext = createContext<Posts[]>([]);
const Categories = createContext<Category[]>([])
export {PostContext, Categories};