import React,{use, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth';
import "../style/form.scss";
const Login = () => {
  const [username,setusername] = useState("")
  const [password,setpassword] = useState("")

  const {login} = useAuth()

  async function handleevent(e){
    e.preventDefault()
    
   handlelogin(username,password)
   .then(res=>{
    console.log(res.data)
    login(res.data.token)
   })
  }
  return (
    <div className='form-container'>
      <h1 className='heading'>Login</h1>
      <form onSubmit={handleevent}>
        <input 
         onChange={(e)=>{setusername(e.target.value)}}
         type='text' name='username' placeholder='enter username'></input>
        <input
         onChange={(e)=>{setpassword(e.target.value)}}
        type='password' name='password' placeholder='enter password'></input>
      <button>Submit</button>
      </form>
    <p>Don't have account: <Link to = '/register'>Register</Link></p>
    </div>
  )
}

export default Login
