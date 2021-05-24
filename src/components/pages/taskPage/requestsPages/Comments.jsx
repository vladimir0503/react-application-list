import React from 'react'

const Comments = ({ comments }) => {
    return (
        <div className='comments'>
            {comments && comments.map(c =>
                <div className='commentItem'>
                    <div className='avatarWrapper'>
                        <div className='commentAvatar'></div>
                    </div>
                    <div >
                        <p className='commentFullName'>{c.fullName}</p>
                        <p className='commentDate'>{c.date}</p>
                        <p className='commentText'>{c.text}</p>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Comments;