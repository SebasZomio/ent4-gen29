
import { useEffect, useState } from 'react'
import './App.css'
import useFech from './hooks/useFech'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'


function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  
  const baseUrl = 'https://users-crud.academlo.tech'

  const [ users, getUser, createUser, deleteUser, updateUser ] = useFech(baseUrl)

  useEffect(() => {
    getUser('/users')
  }, [])
  
  console.log(users);

  

  return (
    <div>
      <div>
        <h1 className='app-title'>User Crud</h1>
      </div>
        <FormUser 
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
      />
      <div>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              
            />
          ))
        }
      </div>
      
    </div>
  )
}

export default App
