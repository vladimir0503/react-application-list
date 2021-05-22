import React from 'react';
import { close } from '../../../../assets/images';

const TaskCreation = () => {
    return (
        <div className='newTaskBlock'>
            <div className='newTaskHeader'>
                <p>Новая задача</p>
                <img src={close}></img>
            </div>
            <div className='textAreaWrapper'>
                <div className='textAreaBlock'>
                    <label>Название</label>
                    <textarea className='textAreaName'></textarea>
                </div>
                <div className='textAreaBlock'>
                    <label>Описание</label>
                    <textarea className='textAreaDescription'></textarea>
                </div>
                <button className='btn newTaskBtn'>Сохранить</button>
            </div>
        </div>
    );
};

export default TaskCreation;
