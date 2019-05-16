import React, { Component } from 'react';

import './PostDetail.css';
import axios from 'axios';
class PostDetail extends Component {
    state={
        loadedPost:null
    }
    componentDidUpdate(){
        if(this.props.id){
           if(!this.state.loadedPost||
            (this.state.loadedPost&&this.state.loadedPost.id!==this.props.id)) {
            axios.get('/posts/'+this.props.id)
.then(response=>{
    this.setState({loadedPost:response.data})
       });
    }
        }
    }
    deleteThisPost=()=>{
        axios.delete('/posts/'+this.props.id)
        .then(response=>{
         console.log(response)  
         })
        .catch(error=>{
            console.log(error)
            
        });     
    }
    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.id){
          post = <p style={{textAlign:'center'}}>Loading....!</p>;   
        }
        if(this.state.loadedPost){
        post = (
            <div className="PostDetail">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.content}</p>
                <div className="Edit">
                    <button className="Delete" onClick={this.deleteThisPost}>Delete</button>
                </div>
            </div>

        );
        }
        return post;
    }
}

export default PostDetail;