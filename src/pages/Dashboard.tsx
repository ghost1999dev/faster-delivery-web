import type React from "react";
import { useAuth } from "../context/useAuth";

export const DashboardPage:React.FC=()=>{
    const {user,token,logout}= useAuth()

    return(
        <div className="min-h-screen bg-slate-50 p-6">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>
                <strong>Token:</strong> {token}
            </p>
            <p>
                <strong>Nombres:</strong>{user?.name} {user?.lastName}
            </p>
            <p>
                <strong>Email</strong> {user?.email}
            </p>
            <button
                className="mt-4 px-4 bg-red-600"
                onClick={logout}
            >
                Cerrar sesion
            </button>
        </div>
    )
}