import React from 'react'

const Comments = ({ comments }) => {

    const monthArr = [
        'январья',
        'февралья',
        'марта',
        'апрелья',
        'майя',
        'июня',
        'июля',
        'августа',
        'сентябрья',
        'ноября',
        'декабря',
    ];

    const addDate = str => {

        const dateArr = str.split('-')
            ? str.split('-')
            : '____-__-__T22:52:45.2219526+03:00'.split('-');

        const timeArr = dateArr[2].split(':');

        timeArr.pop();

        const date = {
            month: monthArr[+dateArr[1]],
            number: [...dateArr[2].split('')[0], ...dateArr[2].split('')[1]].join(''),
            time: `${timeArr[0].split('T')[1]}:${timeArr[1]}`
        };

        return `${date.number} ${date.month}, ${date.time} прокомментрировал`
    };

    return (
        <div className='comments'>
            {comments && comments.filter(c => c.comment !== null).map(c =>
                <div className='commentItem'>
                    <div className='avatarWrapper'>
                        <div className='commentAvatar'></div>
                    </div>
                    <div >
                        <p className='commentFullName'>{c.userName}</p>
                        <p className='commentDate'>{addDate(c.createdAt)}</p>
                        <p className='commentText'>{c.comment}</p>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Comments;