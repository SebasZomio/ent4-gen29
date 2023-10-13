import { useEffect } from "react"
import { useForm } from "react-hook-form"

const FormUser = ( { createUser, infoUpdate, updateUser, setInfoUpdate}) => {

  const {handleSubmit, register, reset} = useForm()

  useEffect(() => {
    reset(infoUpdate)
  }, [infoUpdate])
  

  const submit = data => {
    if (infoUpdate) {
      //update
      updateUser('/users', infoUpdate.id, data)
      setInfoUpdate()
    }else{
      //create
      createUser('/users', data)
    }    
    reset({
      email:'',
      password:'',
      first_name:'',
      last_name:'',
      birthday:'',
    })
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="user-form">
      <h2 className="form">Formulario de Registro</h2>
      <div >
        <input className="controls" {...register('email')} type="email" id="email" placeholder="Email" required />
      </div>
      <div>
        
        <input className="controls"{...register('password')} type="password" id="password" placeholder="Password" required />
      </div>
      <div>
        
        <input className="controls"{...register('first_name')} type="text" id="first_name" placeholder="First Name" required />
      </div>
      <div>
        
        <input className="controls"{...register('last_name')} type="text" id="last_name" placeholder="Last Name" required />
      </div>
      <div>
        
        <input className="controls"{...register('birthday')} type="date" id="birthday" required/>
      </div>
      <button className="button">{infoUpdate? 'Update' : 'Create'}</button>

    </form>
  )
}

export default FormUser