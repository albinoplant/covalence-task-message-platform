import React from 'react';
import Post from './Post';
const Feed = (props) => {
const items = props.posts.map((post, index) =>
<Post 
    username = {post.inputName}
    topic = {post.inputTopic}
    message = {post.inputMessage}
    key={index} />
);
return <ul className='pl-0'>{items}</ul> ;
}

export default Feed;