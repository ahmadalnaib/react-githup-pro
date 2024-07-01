import { createContext,useState } from "react";


const GithupContext = createContext();

const GITHUP_API = "https://api.github.com/users";


export const GithupProvider = ({ children }) => {
  const [users,setUsers]=useState([])
  const [loading,setLoading]=useState(true)

  const fetchUsers = async () => {
    const res=await fetch ('https://api.github.com/users')
    const data=await res.json()

    setUsers(data)
    setLoading(false)

  }

  return <GithupContext.Provider value={{users,loading,fetchUsers}}>{children}</GithupContext.Provider>;
}

export default GithupContext;

