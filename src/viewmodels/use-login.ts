import { useState } from "react";
import { loginUser } from "../service/user-service";

export function useLoginViewModel(){
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("");
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)


    const submit = async(e:React.FormEvent<HTMLFormElement>)=>{
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
            console.log("Error",error);
            
        }finally{
            setIsLoading(false)
        }
    }

    return{
        email,
        password,
        setEmail,
        setpassword,
        submit,
        error,
        isLoading
    }
}