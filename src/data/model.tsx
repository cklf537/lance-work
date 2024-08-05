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

interface Category {
    name?: string;
    category_id?: string;
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
  
export type {NavItems, Posts, Category, Groups, Users, AppState, Actions };