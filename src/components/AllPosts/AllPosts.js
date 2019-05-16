import React from 'react';

import './AllPosts.css';

const allposts = (props) => (
    <article className="AllPosts" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default allposts;