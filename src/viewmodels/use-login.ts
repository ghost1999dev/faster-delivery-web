import { useState } from "react";
import { loginUser } from "../service/user-service";

export function useLoginViewModel(){
    //declarar los estados

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

   // console.log("VALOR EMAIL",email);
    

    //funcion submit
    const submit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setError("")

        if(!email || !password){
            setError("Completa correo y contrasenia")
            return
        }
        setIsLoading(true)
        try {
            const data = await loginUser({email,password})
            console.log("TOKEN",data.token);
            
        } catch (error) {
            console.log("ERROR",error);
            
            
        } finally{
           setIsLoading(false) 
        }

    }


    //retornar lo que necesitamos en la UI

    return{
        email,
        password,
        setEmail,
        setPassword,
        submit,
        isLoading,
        error
    }


}