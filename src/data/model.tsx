interface NavItems{
  title?: string;
  link?: string;
  id?: string;
  alt?: string | undefined;
}

interface Posts{
  user?: string;
  id?: number;
  title?: string;
  body?: string;
}

interface ExtendCategory{
  category_id?: string;
}

interface Category extends ExtendCategory{
    name?: string;
    // id?: number;
    display_name?: string;
    url?: string;
}

interface Groups{
  group_name?:string;
  group_id?: string;
}

interface Users{
  user_name?: string;
  user_id?:string;
  user_group_id?:string;
}


interface AppHeader<NavItems>{
  levelOne?: NavItems;
  levelTwo?: NavItems;
}

interface Actions{
  type?: string;
  payload?: {}
}

interface AppState<Users, Groups, NavItems, Category>{
  users?: Users[];
  groups?: Groups[];
  heading?: NavItems[];
  category?: Category[];
}

// interface Login<Users, Groups>{
//   users?: Users;
//   groups?: Groups;
// }

// interface Login1<Users, Groups>{
//   users?: Users[];
//   groups?: Groups[]
// }

// interface AppState{
//   login?: Login<Users[], Groups[]>;
//   heading?: NavItems[];
//   category?: Category[];
// }

// interface AppState<Login, NavItems, Category>{
//   login?: Login;
//   heading?: NavItems[];
//   category?: Category[];
// }


// interface AppState extends AppHeader<NavItems[]>, Login<Users[], Groups[]>, Users, Groups, Category{};

// interface AppState1 extends Login<Users, Groups>{};
  
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

  
  
  export type {NavItems, Posts, Category, AppHeader, Groups, Users, AppState, Actions, SomeState  };