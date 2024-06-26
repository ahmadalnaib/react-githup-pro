import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function UserItem({user:{login,avatar_url}}) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
     <div className="flex-row items-center space-x-4 card-body">
      <div>
        <div className="avatar">
          <div className="rounded-full w-10 h-10 m-0">
            <img src={avatar_url} alt={login} />
            </div>
        </div>
      </div>
      <div>

        <h2 className="text-lg font-bold">{login}</h2>
        <Link to={`/user/${login}`} className="text-base-content text-opacity-40 ">Visit Profile </Link>
      </div>
     </div>

    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem