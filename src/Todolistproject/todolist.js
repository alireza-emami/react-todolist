import React, { useState , useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import TodolistMain from './TodolistMain';

const Textlist = () => {
    const [texts, settext] = useState([
        // { title: 'Music one', id: 1 },
        // { title: 'Music tow', id: 2 },
        // { title: 'Music three', id: 3 }
    ])
    const addtext = (title) => {
        settext([...texts, { title, id: uuid }])
    }
    return (
        <ul>
            <TodolistMain addtext={addtext} />
            {texts.map(texts => <li key={texts.id}>{texts.title}</li>)}
        </ul>
    );
}

export default Textlist;