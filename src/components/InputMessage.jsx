import React from 'react';

const InputMessage = () => {
    return(
        <form>
            <div className='form-group'>
                <label for='userNameInput'>User name</label>
                <input className='form-control' id='userNameInput' placeholder='Enter your name here' />
            </div>
            <div className='form-group'>
                <label for='topicInput'>Topic</label>
                <input className='form-control' aria-describedby='topicInfo' id='topicInput' placeholder='Topic' />
                <small id='topicInfo' class='form-text text-muted'>Topic of your message should be short and say what's your message about</small>
            </div>
            <div className='form-group'>
                <label for='messageInput'>Message</label>
                <textarea className='form-control' aria-describedby='messageInfo' id='messageInput' placeholder='Enter your message here...' />
                <small id='messageInfo' class='form-text text-muted'>Press 'Send' if you've finished.</small>
            </div>
            <button type='submit' class='btn btn-primary float-right'>Send</button>
        </form>
    );
}
export default InputMessage;