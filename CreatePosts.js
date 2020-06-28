import React, { Component } from 'react'
import {connect} from 'react-redux'
import {postInsert} from '../redux/actionBlog'
import PostDisplay from './PostDisplay'

class CreatePosts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:'',
             desc:'',
             id:''
        }
    }

    handleChange =(e) =>{
        this.setState({
            [e.target.name] :e.target.value,
            id :Date.now()
          })
    }
    
    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state)
        this.props.postPopulate(this.state)
        this.setState({
            title:'',
            desc:''
        })
    }

    render() {
        console.log('PostList -',this.props)
        return (
            <div>
            <h2>Create Post here </h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-element">
                <label htmlFor="title">Post Title</label>
                <input type="text" name="title" placeholder="Enter post title"
                 onChange={this.handleChange}/>
                </div>

                <div className="form-element">
                <label htmlFor="conetnt">Post Description</label>
                <textarea name="desc" placeholder="Type post Description"
                 onChange={this.handleChange}/>
                </div>

                <div className="form-element">
                <button type="submit">Submit</button>
                </div>
            </form> 
            <PostDisplay mobile ={this.props.userBio}/>
            </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return{
        postBuffer : state.postBuffer,
        userBioLogin : state.userBioLogin,
        userBio : state.userBio
    }
}

const mapDispatchToProps =(dispatch) =>{
    return{
        postPopulate : (info) => {dispatch(postInsert(info))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreatePosts)
