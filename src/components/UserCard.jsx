

const UserCard = ({ user, deleteUser, setInfoUpdate }) => {

  const handleDelete = () => {
    deleteUser('/users', user.id)
  }

  const handleEdit = () => {
    setInfoUpdate(user)
  }

  return (
    <div className="container">
      <article className="user-card">
      <h3 className="info-user">#{`${user.id} ${user.first_name} ${user.last_name}`}</h3>
      <ul>
        <li><span>Email: </span><span>{user.email}</span></li>
        <li><span>Birthday: </span><span>{user.birthday}</span></li>
      </ul>
      <div className="button-container">
      <button onClick={handleDelete} >Delete</button>
      <button onClick={handleEdit} >Edit</button>
      </div>
    </article>
    </div>
  )
}

export default UserCard