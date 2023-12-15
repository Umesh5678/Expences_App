import React, { useState } from "react";

const UpdateForm = (props) => {
    

    const [updateDate , setUpdateDate] = useState('');
    const [updateTitle , setUpdateTitle] = useState('');
    const [updateAmount , setUpdateAmount] = useState('');

    const dateUpdateHandler = (event) => {
        setUpdateDate(event.target.value);
    };
    const titleUpdateHandler = (event) => {
        setUpdateTitle(event.target.value);
    };
    const amountUpdateHandler = (event) => {
        setUpdateAmount(event.target.value);
    };


    const submitHandler = (event) => {
        event.preventDefault();
        const expenceUpdatedData = {
            prevId : props.data.eid,
            date : new Date(updateDate),
            title:updateTitle,
            amount:parseInt(updateAmount)
            
        }
       

        props.onUpateExpenceData(expenceUpdatedData);
        
        setUpdateDate('');
        setUpdateTitle('');
        setUpdateAmount('');
        

    }


    return (
        <form onSubmit={ submitHandler } >
            <div className='new-expence_controls'>
                <div className='new-expence_control'>
                    <label>Title</label>
                    <input type='text' value={updateTitle} onChange={ titleUpdateHandler }  required />
                </div>
                <div className='new-expence_control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={updateAmount} onChange={ amountUpdateHandler } required />
                </div>
                <div className='new-expence_control'>
                    <label>Date</label>
                    <input type='date' value={updateDate} onChange={ dateUpdateHandler } required/>
                </div>
            </div>
            <div className='new-expence_actions'>
                <button type='submit' >Update Expence</button>
            </div>

        </form>
    );
}

export default UpdateForm;