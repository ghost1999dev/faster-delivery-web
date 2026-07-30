export interface LoginPayload{
    email:string
    password:string
}

export interface Role{
    id:string
    name:string
    image:string
    route:string
}


export interface UserResponse{
    id:string
    email:string
    name:string
    lastName:string
    image:string
    phone:string
    notification_token:string | null
}

export interface LoginResponse{
    token:string
    userResponse:UserResponse

}