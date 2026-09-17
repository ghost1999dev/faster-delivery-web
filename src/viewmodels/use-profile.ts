import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { updateUserProfile } from "../service/update-service";
import type { UserRequest } from "../models/user";

export function useProfileViewModel(){
    const {user,updateUser,token}=useAuth()

    const [form, setForm] = useState({
        name: user?.name ?? "",
        lastname: user?.lastname ?? user?.lastName ?? "",
        phone: user?.phone
    })

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleChange = (field:keyof typeof form, value:string)=>{
        setForm((prev)=>({...prev, [field]: value}))
    }

    const submit = async()=>{
        if(!user?.id){
            setError("No hay usuario autenticado")
            return
        }
        try {
            setIsLoading(true)
            setError("")
            setSuccess("")

            const payload:UserRequest={
                name: form.name,
                lastname:form.lastname,
                phone: form.phone ?? ""
            }
            const updateUserResponse = await updateUserProfile(user?.id,payload,token)
        
            updateUser({
                ...user,
                ...updateUser,
                name:updateUserResponse.name ?? form.name,
                lastname: updateUserResponse.lastname ?? updateUserResponse.lastName ?? form.lastname,
                phone: updateUserResponse.phone ?? form.phone
            })
            setSuccess("Perfil actualizado correctamente")
        } catch (error) {
            setError(
                error instanceof Error ? error.message : "no se pudo actualizar el usuario"
            )
        }finally{
            setIsLoading(false)
        }
    }
    return{
        form,
        handleChange,
        submit,
        isLoading,
        error,
        success

    }
}