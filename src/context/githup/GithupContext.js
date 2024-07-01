import { createContext,useReducer } from "react";
import githubReducer from "./GithupReducer";


const GithupContext = createContext();

const GITHUP_API = "https://api.github.com/users";


export const GithupProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    const res=await fetch ('https://api.github.com/users')
    const data=await res.json()

    dispatch({type:'GET_USERS',payload:data})

  }

  return <GithupContext.Provider value={{users:state.users,loading:state.loading,fetchUsers}}>{children}</GithupContext.Provider>;
}

export default GithupContext;

