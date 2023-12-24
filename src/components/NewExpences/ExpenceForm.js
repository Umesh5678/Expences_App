import React,{ useState } from 'react';
import './ExpenceForm.css';


const ExpenceForm = (props) => {
    const [inputDate , setInputDate] = useState('');
    const [inputTitle , setInputTitle] = useState('');
    const [inputAmount , setInputAmount] = useState('');
    


    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    };
    const titleChangeHandler = (event) => {
        setInputTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    };
    

    const submitHandler = (event) => {
        event.preventDefault();
        const expenceData = {
            date : new Date(inputDate),
            title:inputTitle,
            amount:parseInt(inputAmount),
            
            
        }
       

        props.onSaveExpenceData(expenceData);
        
        setInputDate('');
        setInputTitle('');
        setInputAmount('');
        

    }

    
    return (
        <form  onSubmit={ submitHandler }>
            <div className='new-expence_controls'>
                <div className='new-expence_control'>
                    <label>Title</label>
                    <input type='text' value={inputTitle} onChange={ titleChangeHandler } required />
                </div>
                <div className='new-expence_control'>
                    <label>Amount</label>
                    <input type='number' value={inputAmount} min="0.01" step="0.01" onChange={ amountChangeHandler } required />
                </div>
                <div className='new-expence_control'>
                    <label>Date</label>
                    <input type='date' value={inputDate}  onChange={ dateChangeHandler } required/>
                </div>
            </div>
            <div className='new-expence_actions'>
                <button type='submit' >Add Expence</button>
            </div>

        </form>
    );
}

export default ExpenceForm;