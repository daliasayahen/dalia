import React, { Component } from 'react'
import axios from 'axios'
import AllPosts from '../AllPosts/AllPosts'
import './Posts.css'
class Posts extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {

                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'amer'
                    }
                });
                this.setState({ posts: updatedPosts })
            })
            .catch(error => {
                console.log(error)
                this.setState({ error: true })
            });


    }
    mypostDetail=(id)=>{
        this.setState({selectedPostId:id})
    }
   
    render() {
        // let posts = <p style={{ textAlign: 'center' }} >Something went wrong</p>
        // if (!this.state.error) {
           let posts = this.state.posts.map(post => {
                return <AllPosts
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.mypostDetail(post.id)}
                />
            })

        // }
        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}
export default Posts;