import { useContext } from "react";
import {PostContext } from "../../../data/context";
import { Posts } from "../../../data/model";

export default function Learning() {
  
 const posts = useContext<Posts[]>(PostContext);
  return <div>{posts && posts.map(item=>item.title)}</div>;
}
