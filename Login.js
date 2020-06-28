import React, { Component } from 'react'
import{connect} from 'react-redux'
import {chkInfo} from '../redux/actionBlog'
import CreatePosts from './CreatePosts'
import {loginInsert} from '../redux/actionBlog'


class Login extends Component {
    state={
        email:'',
        pword:''
    }
    handleChange =(e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state)
        this.props.loginPopulate(this.state) 
        }

        res1  = () => {
            if(this.props.isValidUser)  {
                return (<p>Success</p>)
            }
            else{
                return(<p>Login Failed</p>)
            } 
        }

        componentDidUpdate(){
            if(this.props.isValidUser)  {
                return (this.props.history.push('./create'))
            }
            else{
                return(<p>Login Failed</p>)
            }
        }


    render() {
        console.log('redux', this.props) 
        return (
            <div>
            <h2>Login Page </h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-element">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="Enter your email"
                 onChange={this.handleChange}/>
                </div>

                <div className="form-element">
                <label htmlFor="pword">Password</label>
                <input type="password" name="pword" placeholder="Type a strong password"
                 onChange={this.handleChange}/>
                </div>

                <div className="form-element">
                <button type="submit">Submit</button>
                 
                </div>
            </form>
            {this.res1()}       
            </div>                
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        uBioLogin : state.userBioLogin,
        isValidUser : state.isValidUser
        // userValid :state.isValidUser
    }
} 

const mapDispatchToProps = dispatch =>{
    return{
        // chkInfo : () => dispatch(chkInfo())
        loginPopulate : (info) =>{dispatch(loginInsert(info))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)


