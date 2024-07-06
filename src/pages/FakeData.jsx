import React, { useState } from 'react'

// const BaseUrl = 'https://jsonplaceholder.typicode.com/1';

function FakeData() {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com')
        .then(res => res.json())
        .then(data => setRecords(data))
        .catch(err => console.log(err))
    }, [])
    

  return (
    <>
    <h3 className='text-center'>Fake Data Api</h3>
    <ul>
    {
        records.map((list)=>{
            <li>{list.title}</li>
        })
    }
    </ul>
    </>
  )
}

export default FakeData