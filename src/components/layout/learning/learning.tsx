import { useContext } from "react";
import { AppContext } from "../../../data/context";

export default function Learning() {
  const posts = useContext(AppContext);
  return <div>{
    posts && posts[1].title
    }Learning</div>;
}
