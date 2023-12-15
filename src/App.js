import React, { useEffect, useState } from 'react';
import './App.css';
import Expences from './components/Expences/Expences';
import NewExpences from './components/NewExpences/NewExpences';
import axios from 'axios';


//for storing dummy data
let DUMMY_EXPENCES = [];

function App() {



  //
  const [expences, setExpences] = useState(DUMMY_EXPENCES);
  const [message, setMessage] = useState("");



  function fetchData() {
    fetch("http://localhost/api/api.php").then(
      response => {
        return response.json();
      }
    ).then(
      data => {
        setExpences(data);
      }
    );
  }


  useEffect(() => {
    fetchData();
  }, []);





  const addExpences = (expence) => {


    fetch('http://localhost/api/insert_api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(expence),
    })
      .then(response => fetchData())



  }

  const handleDelete = async (eid) => {

    axios.delete(`http://localhost/api/delete_api.php?id=${eid}`).then(function (response) {

      fetchData();
    })
  }



     const handleUpdate = async (event) => {
      console.log(event.prevId)
      
        const response = await fetch('http://localhost/api/update_api.php', {
          method: 'PUT', // Use 'PATCH' if you're partially updating data
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `id=${event.prevId}&title=${event.title}`,
        });
  
        const data = await response.json();
        fetchData()
        setMessage(data.message);
  
      
      
    };
  





  return (
    <div className='body' >
      <h4 className='text-danger'> {message}</h4>
      <NewExpences expenceData={addExpences} />
      <Expences item={expences} delete={handleDelete} update={handleUpdate} />
    </div>
  );
}

export default App;
