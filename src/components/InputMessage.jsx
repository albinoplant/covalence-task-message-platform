import React from 'react';

const InputMessage = (props) => {
    return(
        <div className="container px-0">
            <form className='border bg-light p-3 pb-5 rounded'>
                <div className='form-group'>
                    <label className='ml-1' htmlFor='userNameInput'>User name</label>
                    <input onChange={(event)=>props.inputNameFunc(event)} className='form-control form-control-sm' id='userNameInput' placeholder='Enter your name here' />
                </div>
                <div className='form-group '>
                    <label className='ml-1' htmlFor='topicInput'>Topic</label>
                    <input onChange={(event)=>props.inputTopicFunc(event)} className='form-control form-control-sm' aria-describedby='topicInfo' id='topicInput' placeholder='Topic' />
                    <small id='topicInfo' className='form-text text-muted'>Topic of your message should be short and say what's your message about</small>
                </div>
                <div className='form-group'>
                    <label className='ml-1' htmlFor='messageInput'>Message</label>
                    <textarea onChange={(event)=>props.inputMessageFunc(event)} className='form-control' aria-describedby='messageInfo' id='messageInput' placeholder='Enter your message here...' />
                    <small id='messageInfo' className='form-text text-muted'>Press 'Send' if you've finished.</small>
                </div>
                <button onClick={event => props.clickSendFunc(event)} className='btn btn-primary float-right'>Send</button>
            </form>
        </div>
    );
}
export default InputMessage;