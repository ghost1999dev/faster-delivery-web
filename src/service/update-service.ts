import { API_BASE_URL } from "../api/apiBase";
import type { UserRequest } from "../models/user";


export async function updateUserProfile(
    userId:number,
    payload:UserRequest,
    token:string | null
){
    const headerToken = token?.startsWith("Bearer ") ? token : `Bearer ${token}`
    const formData = new FormData()
    formData.append("name", payload.name)
    formData.append("lastname",payload.lastname)
    formData.append("phone",payload.phone)
    const response = await fetch(`${API_BASE_URL}/users/upload/${userId}`,{
        method:"PUT",
        headers:{
            
            Authorization:headerToken
        },
        body:formData
    })
    if(!response.ok){
        const errorText = await response.text()
        throw new Error(errorText || "Error al actualizar usuario")
    }
    return response.json()


}