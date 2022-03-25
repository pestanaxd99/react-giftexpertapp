import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setinputValue] = useState('');

    const handledInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handledSubmit = (e) => {
        e.preventDefault();
        // console.log('Submit hecho');     

        if(inputValue.trim().length > 2 ){
            setCategories(cats => [ inputValue, ...cats]);
            setinputValue('');
        };
    };

    return (
        <form onSubmit={handledSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handledInputChange}
            />
        </form>
    )
};

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
};
