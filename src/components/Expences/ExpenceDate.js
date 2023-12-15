import React from "react";
import './Expencedate.css'

const ExpenceDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month:'long'});
    const year  = props.date.getFullYear();;
    const day   = props.date.toLocaleString('en-US', {day:'2-digit'});
    return (
        <div className="expence-date">
            <div className="expence-date_month"> { month } </div>
            <div className="expence-date_day"> { day } </div>
            <div className="expence-date_year"> { year } </div>
        </div>
    )
}

export default ExpenceDate;