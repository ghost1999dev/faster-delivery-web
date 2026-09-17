import { useEffect } from "react";
import type { UserResponse } from "../models/user";

 interface PersonalInfoProps{
    user:UserResponse | null
    name:string
    lastname:string
    phone:string  | undefined
    onChange:(field: "name" | "lastname" | "phone",value:string)=>void
    onSave:()=>void
    isLoading: boolean
    error?:string
    success?:string
 }
 export const PersonalInfo=({
    user,
    name,
    lastname,
    phone,
    onChange,
    onSave,
    isLoading,
    error,
    success
}:PersonalInfoProps)=>{
    useEffect(() => {
      if(success){
        console.log("SE ACTIVO ERROR");
        
      }
    }, [success])
    
    return(
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-xl font-bold text-slate-800">Datos Personales</h2>
                    <p className="mt-1 text-sm text-slate-500">Informacion obtenida de la sesion actual</p>
                </div>
                <button
                    onClick={onSave}
                    disabled={isLoading}
                    className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                    {isLoading ? "Guardando...": "Guardar perfil"}
                </button>
                
            </div>
            {error &&(
                <div>{error}</div>
            )}
            {success &&(
                <div>{success}</div>
            )}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <label 
                    htmlFor=""
                    className="text-sm font-medium text-slate-700"
                >
                    Nombre
                </label>
                <input 
                    type="text"
                    value={name}
                    onChange={(e)=>onChange("name", e.target.value)} 
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-700"

                />
                 <label 
                    htmlFor=""
                    className="text-sm font-medium text-slate-700"
                >
                    Apellido
                </label>
                <input 
                    type="text"
                    value={lastname}
                    onChange={(e)=>onChange("lastname",e.target.value)} 
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-700"
                    
                />
                 <label 
                    htmlFor=""
                    className="text-sm font-medium text-slate-700"
                >
                    Correo electronico
                </label>
                <input 
                    type="text"
                    readOnly
                    value={user?.email ?? ""} 
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-700"
                    
                />
                 <label 
                    htmlFor=""
                    className="text-sm font-medium text-slate-700"
                >
                    Numero telefonico
                </label>
                <input 
                    type="text"
                    
                    value={phone} 
                    onChange={(e)=>onChange("phone",e.target.value)}
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-700"
                    
                />
            </div>
        </section>
    )
 }