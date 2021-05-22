import React from 'react';
import { close } from '../../../../assets/images';
import Comments from './Comments';
import TaskInfo from './TaskInfo';

const comments = [
    {
        id: 0,
        fullName: 'Иванов Александр',
        date: '12 августа, 10:00 прокоментировал',
        text:
            'Канбан-доска - это популярный инструмент управления agile-проектами,\n' +
            'с помощью которого можно наглядно представить задачи, ограничить объем\n' +
            'незавершенной работы и добиться максимальной производительности\n' +
            '(или скорости). Приложение написанно на фреймворке React.js'
    }
];

const taskInfo = {
    status: {
        color: '#ffa161',
        value: 'В работе'
    },
    applicant: 'Александр Вознесениский',
    create: 'Маркова Анна',
    executor: 'Коржин Игорь',
    prority: 'Высокий',
    time: '12.11.2018',
    tags: [
        { id: 0, name: 'Сервер 1' },
        { id: 2, name: 'Сервер 2' }
    ],
}

const TaskChange = () => {
    return (
        <div className='newTaskBlock'>
            <div className='newTaskHeader'>
                <p>Изменение</p>
                <img src={close}></img>
            </div>
            <div className='taskChangeContent'>
                <div className='commentsBlock'>
                    <div className='descriptionWrapper'>
                        <div className='description'>
                            <p className='title'>Описание</p>
                            <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className='addCommentBlock'>
                            <div className='textAreaBlock'>
                                <label>Добавление коментариев</label>
                                <textarea className='texAreaComment'></textarea>
                            </div>
                            <button className='btn saveBtn'>Сохранить</button>
                        </div>
                        <Comments comments={comments} />
                    </div>
                </div>
                <div className='infoBlock'>
                    <TaskInfo taskInfo={taskInfo} />
                </div>
            </div>
        </div>
    );
};

export default TaskChange;