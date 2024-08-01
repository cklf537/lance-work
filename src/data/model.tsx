interface NavItems{
    title: string;
    link: string;
    id: string;
    alt?: string | undefined;
  }

  interface Posts{
    user?: string;
    id?: number;
    title?: string;
    body?: string;
  }
  
// type Posts<Post> = {
//   data: Post;
// }


// type Post = {
//   user?: string;
//   id?: number;
//   title?: string;
//   body?: string;
// }

// type ApplicationPost<Post> = {
//   data: Post;
//   error: string;
// }


// const userdata: ApplicationPost<Post[]> = {
//   data: [{}],
//   error: "string"
// }

  
  
  export type {NavItems, Posts, Post};