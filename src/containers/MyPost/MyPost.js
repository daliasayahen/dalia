import React, { Component } from 'react';

// import AllPosts from '../../components/AllPosts/AllPosts';
import PostDetail from '../../components/PostDetail/PostDetail';
 import AddPost from '../MyPost/AddPost/AddPost'
import Posts from './Posts/Posts'
import './MyPost.css';
import axios from 'axios';
import {Route,Link} from 'react-router-dom'
class MyPost extends Component {
    // state = {
    //     posts: [],
    //     selectedPostId: null,
    //     error: false
    // }
 
    render() {
        return (
            <div className="Posts">
                <header >
                    <nav>
                        <ul>
                            <li><Link to="/"> Home </Link> </li>
                            <li><Link to={{
                                pathname:'new-post',
                                hash:'#submit',
                                search:'?param1=test'
                            }}> Add New Post</Link></li>
                        </ul>
                    </nav>

                </header>
        
              {/* <Route path="/" exact render={()=><h1>Home</h1>}/>
              <Route path="/new-post" exact render={()=><h1>NewPost</h1>}/> */}
               <Route path="/" exact component={Posts}/>
               <Route path="/new-post" exact component={AddPost}/>
            </div>
            
        );
    }
}

export default MyPost;