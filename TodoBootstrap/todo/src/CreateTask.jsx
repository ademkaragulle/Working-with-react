import React, { useState } from 'react'

export default function CreateTask(props) {
    const [task, setTask] = useState({
        title: '',
        content: ''
    })

    const detectChange = (e) => {
        const { name, value } = e.target

        setTask((prevTask) => {
            return {
                ...prevTask,
                [name]: value,
            }
        })

    }

    const submitTask = (event) => {
        props.onAdd(task)
        setTask({
            title: '',
            content: ''
        })
        event.preventDefault()
    }


    return (
        <div className='todoDivArea'>
            <form className='todoDiv'>
                <input
                    type="text"
                    className='form-control todoText mb-3'
                    name='title'
                    value={task.title}
                    placeholder='Başlık... '
                    onChange={detectChange}
                />
                <textarea
                    name="content"
                    value={task.content}
                    className='form-control todoText mb-3'
                    rows={3}
                    placeholder="İşinizi Yazınız..."
                    onChange={detectChange}
                >
                </textarea>
                <button onClick={submitTask} className='btn btn-primary px-4'>Ekle</button>
            </form>
        </div>
    )
}
