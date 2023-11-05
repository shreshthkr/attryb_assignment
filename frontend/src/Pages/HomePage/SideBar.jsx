import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import "./SideBar.css";
const SideBar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialState = searchParams.getAll("mileage");
    const initialColorState = searchParams.getAll("color");
    const initialOrder = searchParams.get("order");
    const [mileage, setMileage] = useState(initialState || []);
    const [color,setColor] = useState(initialColorState || []);
    const [order, setOrder] = useState(initialOrder || "");


    const handleChangeMileage = (e) => {
        let newMileage = [...mileage];
        let value = e.target.value;
    
        if (newMileage.includes(value)) {
          newMileage.splice(newMileage.indexOf(value), 1);
        } else {
          newMileage.push(value);
        }
        setMileage(newMileage);
        e.target.checked = newMileage.includes(value);
      };

      const handleChangeColor = (e) => {
        let newColor = [...color];
        let value = e.target.value;
    
        if (newColor.includes(value)) {
          newColor.splice(newColor.indexOf(value), 1);
        } else {
          newColor.push(value);
        }
        setColor(newColor);
        e.target.checked = newColor.includes(value);
      };



      useEffect(()=>{
        let params = {
            mileage,
            color
        }
        order && (params.order = order)
        setSearchParams(params)
      },[mileage,color,order])
   

      const handleSort = (e) => {
        setOrder(e.target.value);
     }
   
  return (
    <div className='sidebar'>
       <div>
        <h2>Filters</h2>
       </div>
       <div className='mileage-filter'>
          <h2>Mileagae</h2>
          <div className='mileage-stats'>
             <div>
                <input type="checkbox"
                value={"18"}
                name={"mileage"}
                 onChange={handleChangeMileage}
                 checked={mileage.includes("18")}
                />
                <label>18 km</label>
             </div>
             <div>
                <input type="checkbox"
                 value={"20"}
                 name={"mileage"}
                 onChange={handleChangeMileage}
                 checked={mileage.includes(20)}  />
                 <label>20 km</label>
             </div>
             <div>
             <input type="checkbox"
                 value={"22"}
                 name={"mileage"}
                 onChange={handleChangeMileage}
                 checked={mileage.includes(22)}  />
                 <label>22 km</label>
             </div>
             <div>
             <input type="checkbox"
                 value={25}
                 name={"mileage"}
                 onChange={handleChangeMileage}
                 checked={mileage.includes(25)}  />
                 <label>25 km</label>
             </div>
          </div>
       </div>
       <div className='color-stats'>
        <div>
          <h2>Colors</h2>
        </div>
       <div>
             <input type="checkbox"
                 value={"red"}
                 name={"color"}
                 onChange={handleChangeColor}
                 checked={color.includes("red")}  />
                 <label>Red</label>
             </div>
             <div>
             <input type="checkbox"
                 value={"black"}
                 name={"color"}
                 onChange={handleChangeColor}
                 checked={color.includes("black")}  />
                 <label>Black</label>
             </div>
             <div>
             <input type="checkbox"
                 value={"white"}
                 name={"color"}
                 onChange={handleChangeColor}
                 checked={color.includes("white")}  />
                 <label>White</label>
             </div>
             <div>
             <input type="checkbox"
                 value={"gray"}
                 name={"color"}
                 onChange={handleChangeColor}
                 checked={color.includes("gray")}  />
                 <label>Gray</label>
             </div>
       </div>
       <div className='price-stats'>
       <h3>Sort by Price</h3>
      <div onChange={handleSort}>
        <input type="radio" name="order" value={"asc"} defaultChecked={order==="asc"} />
        <label>Ascending</label>
        <input type="radio" name="order" value={"desc"} defaultChecked={order==="desc"} />
        <label>Descending</label>
      </div>
       </div>
    </div>
  )
}

export default SideBar;
