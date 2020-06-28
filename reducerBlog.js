import { CHK_INFO } from './actionBlogTypes'

const initState = {
    userBio : [],    // signup data
    userBioLogin:[], // login data
    isValidUser:false,
    postBuffer :[],
    currentUser :{}
}

// userBio :[{fname:'Ankit',lname:'Singh',email:'ankit123@gmail.com',pword:'thalibajao'}]
// userBioLogin :[{email:'ankit123@gmail.com',pword:'thalibajao'}]

const reducerBlog = (state=initState,action) =>{
    switch(action.type){
        case 'SIGNUP_INSERT':
                return{
                    ...state,
                    userBio:[...state.userBio, action.payload]
                }
        case 'LOGIN_INSERT':
            if(state.userBio.email===state.userBioLogin.email && state.userBio.pword===state.userBioLogin.pword){
                return{
                    ...state,
                    userBioLogin:[...state.userBioLogin, action.payload],
                    // currentUser:{...userBioLogin,{loggedInInfo:action.payload}},
                    isValidUser : !state.isValidUser
                }     
            } 
            else{
                return ({...state,
                    userBioLogin:[...state.userBioLogin, action.payload],    
                })
            }
        case 'POST_INSERT':
            return{
                ...state,
                postBuffer : [...state.postBuffer, action.payload],
                // userBio : [...state.userBio, state.postBuffer = [...state.postBuffer,action.payload,state.userBio]]
                // userBio : [state.postBuffer = [...state.postBuffer,action.payload,state.userBio]],
                // userBio : [...state.userBio, state.userBio.posts =[ {title:state.postBuffer.title,desc:state.postBuffer.title,id:state.postBuffer.id}]
               //3rd Best option -> userBio :[...state.userBio,[...state.postBuffer, action.payload,
                    // {title:state.postBuffer.title,
                    // desc:state.postBuffer.desc,
                    // id:state.postBuffer.id}]]
                //2nd Best option-> userBio : [...state.userBio,{fname:state.userBio.fname,
                    // email:state.userBio.email,posts:[...state.postBuffer, action.payload,{title:state.postBuffer.title,
                        // desc:state.postBuffer.desc,
                        // id:state.postBuffer.id}]}]   
                userBio : [...state.userBio,{posts:[...state.postBuffer, action.payload]}]                                         
            }

        default: 
            return state
    }
}

export default reducerBlog