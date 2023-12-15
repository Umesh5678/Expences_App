import './Expences.css';
import ExpenceItem from './ExpenceItem';
import Card from './Card';
const Expences = (props) => {

    function deleteHandle(deleteId){
        props.delete(deleteId);
    }

    function handleupdate(data)
    {
        props.update(data);
    }


    return (
        <Card className='expences'>

            {
                props.item.map(expences => (
                    <ExpenceItem
                    key = {expences.id}
                    eid = {expences.eid}
                    date={expences.date}
                    title={expences.title}
                    amount={expences.amount} handleDelete = {deleteHandle} UpdateHandle={handleupdate} />
    
                ))
            }
          

        </Card>
    );
}

export default Expences;