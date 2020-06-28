import React, { Component } from 'react'
// import { FETCH_BIO } from '../redux/actionBlogTypes'
import { connect } from 'react-redux'
import {signupInsert} from '../redux/actionBlog'

class Signup extends Component {
    state={
        fname:'',
        lname:'',
        email:'',
        pword:'',
        posts:[]
    }

    handleChange =(e) =>{
        console.log(e.target.name)
        this.setState({
            [e.target.name] :e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        console.log(this.state)
        // this.props.uBio.push(this.state);
        this.props.signupPopulate(this.state)
        console.log(this.props.signupPopulate)
    }

    render() {
        console.log('redux', this.props)
        return (
            <div>
            <h2>Signup Page </h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-element">
                <label htmlFor="fname">First name</label>
                <input type="text" name="fname" 
                placeholder="Enter your first name"
                 onChange={this.handleChange}/>
                </div>

                <div className="form-element">
                <label htmlFor="lname">Last name</label>
                <input type="text" name="lname" placeholder="Enter your last name"
                 onChange={this.handleChange}/>
                </div>

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
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        uBio : state.userBio
    }
} 

const mapDispatchToProps = dispatch =>{
    return{
        signupPopulate : (info) =>{dispatch({type:'SIGNUP_INSERT',payload:info})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup)

