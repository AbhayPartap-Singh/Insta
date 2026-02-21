import{createContext,useEffect,useState}from"react";

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [user,setuser] = useState(null)
    const [loading,setloading] = useState(true) 

    const handlelogin = async(email,password)=>{
        try {
       const response = await login(email,password)
       setuser(response.user)}
        catch (error) {
            throw error
        }
        finally{
        setloading(false)  
        }
    }
   

        const handleRegister = async(username,email,password)=>{
        try {
       const response = await register(email,password)
       setuser(response.user)}
        catch (error) {
            throw error
        }
        finally{
        setloading(false) 
    }
    }
    
    
}

return(
    <AuthContext.Provider value={{user,loading,handlelogin,handleRegister}}>
        {children}
    </AuthContext.Provider>
)