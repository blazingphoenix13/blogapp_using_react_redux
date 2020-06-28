import { CHK_INFO } from "./actionBlogTypes"

export const chkInfo = () =>{
    return{
        type: CHK_INFO,
        // payload: email
    }
}

export const signupInsert = (info) =>{
    return {
        type: 'SIGNUP_INSERT',
        payload: {...info}
    }
}

export const loginInsert = (info) =>{
    return {
        type: 'LOGIN_INSERT',
        payload: {...info}
    }
}

export const postInsert = (info) =>{
    return {
        type: 'POST_INSERT',
        payload: {...info}
    }
}

