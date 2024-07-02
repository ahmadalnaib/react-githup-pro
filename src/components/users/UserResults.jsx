import {useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from '../users/UserItem'
import GithubContext from '../../context/githup/GithupContext'

function UserResults() {
const {users,loading }=useContext(GithubContext)

  if(!loading){

    return (
       <div className='grid grid-cols-1 gap-8 xl:grid-col-4 lg:grid-col-4 md:grid-col-2'>
        {users.map((user) =>(
    <UserItem key={user.id} user={user}/>
  
        ))}
  
       </div>
    )
  }
  else{
    return <Spinner/>
  }
}

export default UserResults