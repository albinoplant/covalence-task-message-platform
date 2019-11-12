import React from 'react';

const Post = (props) => {
    return(
    <li className='card p-0 enter mb-2'>
        <div className="card-header">
        <h6 className='mb-0'><span className='mr-3' role="img" aria-label="person">👤</span>
        {props.username}</h6>
        </div>
        <div className='card-body'>
            <u><h6 className='text-muted pb-2'>{props.topic}</h6></u>
            <p className='mb-0' style={{whiteSpace:'pre-line'}}>{props.message}</p>
        </div>
    </li>
    )
}
export default Post;