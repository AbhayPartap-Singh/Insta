import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "../../../style/form.scss";
const Register = () => {
  const [username,setusername]= useState("")
  const [email,setemail]= useState("")
  const [password,setpassword]= useState("")

  async function handleformsubmit(e){
    e.preventDefault()
    axios.post("http://localhost:3000/api/auth/register",{
      username,
      email,
      password
    },{
      withCredentials:true
    })
    .then(res=>{
      console.log(res.data)
    })
  }
  return (
  
      <div className='form-container'>
        <h1 className='heading'>Register</h1>
      < form onSubmit={handleformsubmit}>
        <input
        onChange={(e)=>{setusername(e.target.value)}}
         type='text' name='username' placeholder='enter username'></input>
        <input 
         onChange={(e)=>{setemail(e.target.value)}}
        type='email' name='email' placeholder='enter email'></input>
        <input 
         onChange={(e)=>{setpassword(e.target.value)}}
        type='password' name='password' placeholder='enter password'></input>

         <button>Submit</button>
      </form>
     <p>Already have an account:<Link to="/login">Login</Link></p>
    </div>
    
  )
}

export default Register
