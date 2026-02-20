import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "../../../style/form.scss";
const Login = () => {
  const [username,setusername] = useState("")
  const [password,setpassword] = useState("")

  async function handleevent(e){
    e.preventDefault()
     axios.post("http://localhost:3000/api/auth/login",{
      username,
      password
     },{
      withCredentials:true
     })
     .then(res=>{res.data})


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
