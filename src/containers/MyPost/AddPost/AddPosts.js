import React, { Component } from 'react';

import './AddPosts.css';
import axios from 'axios'
class AddPost extends Component {
   state = {
       title: '',
       content: '',
       author: 'Amer'
   }
   postMyNewData=()=>{
       const data={
           title:this.state.title,
           body:this.state.content,
           author:this.state.author
       }
       axios.post('/posts',data)
       .then(response=>{
        console.log(response)
        })
       .catch(error=>{
           console.log(error)

       });
   }
   render () {
       return (
           <div className="AddPost">
               <h1>Add a Post</h1>
               <label>Title</label>
               <input type="text" value={this.state.title}
               onChange={(event) => this.setState({title: event.target.value})} />
               <label>Content</label>
               <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
               <label>Author</label>
               <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                   <option value="Amer">Amer</option>
                   <option value="Mohammad">Mohammad</option>
               </select>
               <button onClick={this.postMyNewData}>Add Post</button>
           </div>
       );
   }
}

export default AddPost;