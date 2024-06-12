import { useEffect } from 'react'

function UserResults() {
  useEffect(() => {
    fetchUsers()
  
  }, [])

  const fetchUsers = async () => {
    const res=await fetch ('https://api.github.com/users')
    const data=await res.json()
    console.log(data)
  }

  return (
    <div>UserResults</div>
  )
}

export default UserResults