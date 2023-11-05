import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./OemSpecs.css";

const OemSpecs = () => {

    const [model, setModel] = useState('');
    const [oemData, setOemData] = useState([]);

  
const handleSearch = () => {
    if (model.trim() !== '') {
    axios.get(`https://alert-rose-lovebird.cyclic.app/oemSpecs/cars?model=${model}`)
    .then((res) => {
        setOemData(res.data);
    })
    .catch((err)=>{
        console.log(err)
    })
}};

console.log(oemData);

  return (
    <div className='oem-func'>
      <div>
        <input type="text" placeholder='Enter model name with year'
            value={model}
            onChange={(e) => setModel(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        </div>   

        <div>
            {oemData ? (
                <div>
                   <div>
                    <img src={oemData.image} alt={oemData.modelName} />
                   </div>
                   <div>
                    <h2>{oemData.modelName}</h2>
                    <p>{oemData.price}</p>
                    <p>{oemData.colors}</p>
                    <p>{oemData.maxSpeed}</p>
                    </div> 
                </div>
            ) : null}
            </div>   
    </div>
  )
}

export default OemSpecs;
