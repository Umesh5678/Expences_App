import React from "react";
import UpdateForm from "./UpdateForm";

const UpdateItem = (props) => {
    


    const updateExpenceDataHandler = (enteredExpenceData) => {

        props.updatedData(enteredExpenceData);

    }
    return (
        <div className='new-expence'>
            <UpdateForm  data = {props.update} onUpateExpenceData = {updateExpenceDataHandler}/>
        </div>
    );
}

export default UpdateItem;