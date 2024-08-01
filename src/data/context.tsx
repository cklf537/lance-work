import { createContext } from "react";
import { Posts } from "./model";

const PostContext = createContext<Posts[]>([]);

export {PostContext};