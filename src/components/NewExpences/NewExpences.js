import React from 'react';
import ExpenceForm from './ExpenceForm';
import './NewExpences.css';

const NewExpences = (props) => {

    const saveExpenceDataHandler = (enteredExpenceData) => {

        const expenceData = {
            eid : Number(Math.random().toString()),
            ...enteredExpenceData
        }
        console.log(expenceData)
        props.expenceData(expenceData);
    };

    return (
        <div className='new-expence'>
            <ExpenceForm onSaveExpenceData ={saveExpenceDataHandler} />
        </div>
    );
}

export default NewExpences;