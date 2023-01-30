import React from 'react'
import Input from './Input';

function Form({arrayItem, handleClick}) {
    const handleSubmit = (e) => {
        // console.log(e);
        e.preventDefault();
    }
    
    return (
        <form className='decor-box' onSubmit={handleSubmit}>
            <label>{arrayItem[0].cat.toUpperCase()}</label>
            <div className='item-list'>
                <Input arrayItem={arrayItem} handleClick={handleClick} />
            </div>
        </form>
    )
}

export default Form;
