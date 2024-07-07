import { Action } from "routing-controllers";


export const checkAuth = async (action: Action, roles: string[]) => {
    let token = action.request.headers['authorization'];
    console.log("Checking  Auth");
    token = token.split('Bearer')[1].trim().toString()
    console.log(token);
    if(token === "123") {
        console.log("Inside token");
        return true
    }
    return false;
}