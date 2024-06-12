import { useEffect,useState } from 'react'
import Spinner from '../layout/Spinner'

function UserResults() {
const [users,setUsers]=useState([])
const [loading,setLoading]=useState(true)


  useEffect(() => {
    fetchUsers()
  
  }, [])

  const fetchUsers = async () => {
    const res=await fetch ('https://api.github.com/users')
    const data=await res.json()

    setUsers(data)
    setLoading(false)

  }

  if(!loading){

    return (
       <div className='grid grid-cols-1 gap-8 xl:grid-col-4 lg:grid-col-4 md:grid-col-2'>
        {users.map((user) =>(
          <h3>{user.login}</h3>
  
        ))}
  
       </div>
    )
  }
  else{
    return <Spinner/>
  }
}

export default UserResults