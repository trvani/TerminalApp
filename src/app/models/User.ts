export interface User{
    firstName: string,
    lastName: string,
    email?: string,
    isActive?:boolean,
    hide?:boolean,
    registered?:Date
}