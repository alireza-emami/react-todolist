import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import TodolistMain from './TodolistMain';


const Textlist = () => {
    const [texts, settext] = useState([])
    const addtext = (title) => {
        settext([...texts, { title }])
    }
    const handelclick = (e) => {
        // removeEventListener(e.target.value)
         console.log(texts.title)
    }
    return (
        <ul>
            <TodolistMain addtext={addtext} />
            {texts.map(texts => <li className='b'>  <label class="form-check-label" ></label> {texts.title} <i onClick={handelclick} class=" bi bi-trash3"></i></li>)}
        </ul>
    );
}

export default Textlist;