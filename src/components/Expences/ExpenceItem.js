import ExpenceDate from './ExpenceDate';
import './ExpenceItem.css';
import Card from './Card';
import { useState } from 'react';
import UpdateItem from '../UpdateExpences/UpdateItem';



function ExpenceItem(props) {
  
    const [update,updateHandle] = useState(false);

    // const [newTitle,setNewTitle] = useState();
    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //         setTitle(newTitle);

    // }

    // const changeHandler = (event) => {
    //    setNewTitle(event.target.value);

    // }    

    const deleteHandle =(event)  => {
            props.handleDelete(event);
    }

    const updateData = (newdata) => {
        props.UpdateHandle(newdata);
    }
    
    



    
    return (
        <div>
        <Card className="expence_item">
            <ExpenceDate date={new Date(props.date)} />
            <div className="expence_item_discrption">
                <h2>{props.title}</h2>
                <div className="expence_item_price">
                    ${props.amount}
                </div>
            </div>
            {/* <input type='text' className='edit_input' onChange={ changeHandler }  value={newTitle}/>
            <div><button className='button-27' onClick={ clickHandler }>Change Title</button></div> */}
           <div><button className='button-27' onClick={() => deleteHandle(props.eid)} >delete</button></div>
           <div><button className='button-27'  onClick={() => updateHandle(!update)}>update</button></div>
           
        </Card>
        {update && <UpdateItem update={props}  updatedData = {updateData}/> }
        </div>
    );
}

export default ExpenceItem;