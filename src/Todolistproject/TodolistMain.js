import React, { useState } from 'react';


const Newtodolistform = ({ addtext }) => {
    const [title, seTitle] = useState('')
    const handelsubmit = (e) => {
        e.preventDefault()
        addtext(title)
        seTitle('')
    }
    return (
        <form onSubmit={handelsubmit}>

            <div className='form'>
                <input className='input1' type='text' required value={title}
                    onChange={(e) => { seTitle(e.target.value) }}
                ></input>
                <input className='input2' type='submit'></input>
                <label>write your text</label>
            </div>

        </form>
    );
}

export default Newtodolistform;


