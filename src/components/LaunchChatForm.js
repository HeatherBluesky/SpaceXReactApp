
import React, { useState } from 'react'


const LaunchChatForm = ({launch, onChatSubmit}) => {

const [comment, setComment] = useState("")

const handleCommentChange = (event) => {
    setComment(event.target.value)
}


const handleSubmit = (event) => {
    event.preventDefault()
    const newChat = {
        comment: comment,
        launch: launch.name
    }


const onChatSubmit = (event) =>{
    setComment("")
    
}

    return (
            <>
            <div className="launch-chat-form">
                <h4>What are your thought</h4>
                <form className="form-container" onSubmit={handleSubmit}>
                    <input className="form-inputs" type="text" id="comment" placeholder="ENTER COMMENT.." value={comment} onChange={handleCommentChange} required />
                    <input type="submit" value="submit" />
                </form>
            </div>
            </>
            )
};
}

export default LaunchChatForm;

