import React, { useState, useEffect } from 'react'
import firebase from '../firebase'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

const List = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('todos')
            .onSnapshot(snapshot => {
                const newTodos = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setTodos(newTodos)
            })
        return () => unsubscribe()
    }, [])

    const reverseDate = str => {
        return str.split("-").reverse().join("-");
    }

    console.log(todos)
    return (
        <>
            <ol>
                {todos.map(todo =>
                    <li key={todo.id}><span>{todo.taskGroup}</span> <span>{todo.taskName}</span><span> {reverseDate(todo.taskDate)}</span> <span>{todo.taskTime}</span></li>
                )}
            </ol>
        </>
    )
}

export default List;
