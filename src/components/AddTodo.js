import React, { useState } from 'react'
import firebase from '../firebase'

const AddTodo = () => {
    const [newTodo, setNewTodo] = useState({
        taskGroup: '',
        taskName: '',
        taskDate: '',
        taskTime: ''
    })

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setNewTodo(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const onSubmit = e => {
        e.preventDefault()

        firebase
            .firestore()
            .collection('todos')
            .add(newTodo)
            .then(() => {
                setNewTodo({
                    taskGroup: '',
                    taskName: '',
                    taskDate: '',
                    taskTime: ''
                })
            })
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="groupInput">
                <span>Grupa: </span>
                <select id="groupInput" name="taskGroup" value={newTodo.taskGroup} onChange={handleOnChange} required>
                    <option value="1a">1a</option>
                    <option value="1a">1b</option>
                    <option value="2a">2a</option>
                    <option value="2a">2b</option>
                    <option value="3a">3a</option>
                    <option value="3a">3b</option>
                </select>
            </label>
            <label htmlFor="NameInput">
                <span>Zadanie: </span>
                <select id="NameInput" name="taskName" value={newTodo.taskName} onChange={handleOnChange} required>
                    <option value="kartkówka">kartkówka</option>
                    <option value="sprawdzian">sprawdzian</option>
                    <option value="powtórka">powtórka</option>
                    <option value="luzik">luzik</option>
                    <option value="pytanie">pytanie</option>
                </select>
            </label>
            <label htmlFor="dateInput">
                <span>Data: </span>
                <input type="date" id="dateInput" name="taskDate" value={newTodo.taskDate} onChange={handleOnChange} required />
            </label >
            <label htmlFor="timeInput">
                <span>Godzina: </span>
                <input type="time" id="timeInput" name="taskTime" value={newTodo.taskTime} onChange={handleOnChange} required />
            </label >
            <button>Dodaj</button>
        </form >
    );
}

export default AddTodo;