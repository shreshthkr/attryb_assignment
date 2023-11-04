import React, { useState } from "react";
import "./InventoryPage.css";
import axios from "axios";
const initialState = {
  model: "",
  mileage: null,
  price: null,
  km_odeometer: null,
  scratches: null,
  originalPaint: "",
  accidentCount: null,
  previousBuyer: null,
  registrationPlace: "",
  image: "",
  description: "",
};

const InventoryPage = () => {
  const [state, setState] = useState(true);
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async () => {
    try {
      let res = await axios.post(`http://localhost:8080/inventory/add`, formData);
      console.log(res)
      alert("Car data has been added");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="inventory">
      <div className="inventory-nav">
        <p onClick={() => setState(true)}>Add Inventory</p>
        <p onClick={() => setState(false)}>Manage Inventory</p>
      </div>
      <div className="inventory-manage">
        {state ? (
          <div className="add-inventory">
            <div className="inventory-heading">
              <h1>Add Car Details</h1>
            </div>
            <div className="inventory-form">
              <div className="car-model">
                <label>Model Name</label>
                <input
                  type="text"
                  placeholder="Enter you car model" 
                  onChange={(e) => setFormData({...formData, model:e.target.value})}
                />
              </div>
              <div className="car-milage">
                <div>
                  <label>Mileage</label>
                  <input
                    type="number"
                    placeholder="Enter Mileage"
                    onChange={(e) => setFormData({...formData, mileage:e.target.value})}
                  />
                </div>
                <div>
                  <label>Price</label>
                  <input
                    type="number"
                    placeholder="Enter your price"
                    onChange={(e) => setFormData({...formData, price:e.target.value})}
                  />
                </div>
              </div>
              <div className="car-reading">
                <label>Odeometer Reading</label>
                <input
                  type="number"
                  placeholder="Enter Odeometer reading"
                  onChange={(e) => setFormData({...formData, km_odeometer:e.target.value})}
                />
              </div>
              <div className="car-paint">
                <div>
                  <label>No. of Scratches</label>
                  <input
                    type="number"
                    placeholder="Enter Scratches count"
                    onChange={(e) => setFormData({...formData, scratches:e.target.value})}
                  />
                </div>
                <div>
                  <label>Color</label>
                  <input
                    type="text"
                    placeholder="Enter Color"
                    onChange={(e) => setFormData({...formData, originalPaint:e.target.value})}
                  />
                </div>
              </div>
              <div className="car-safety">
                <div>
                  <label>Accidents</label>
                  <input
                    type="number"
                    placeholder="Enter no. of Accidents"
                    onChange={(e) => setFormData({...formData, accidentCount:e.target.value})}
                  />
                </div>
                <div>
                  <label>Previous Buyer Count</label>
                  <input
                    type="number"
                    placeholder="Enter previous buying"
                    onChange={(e) => setFormData({...formData, previousBuyer:e.target.value})}
                  />
                </div>
              </div>
              <div>
                <div>
                  <label>Registration location</label>
                  <input
                    type="text"
                    placeholder="Enter Registration Place"
                    onChange={(e) => setFormData({...formData, registrationPlace:e.target.value})}
                  />
                </div>
                <div>
                  <label>Upload Image</label>
                  <input
                    type="text"
                    placeholder="Enter Image URL"
                    onChange={(e) => setFormData({...formData, image:e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label>Description</label>
                <textarea
                  placeholder="Enter Description"
                  required
                  onChange={(e) => setFormData({...formData, description:e.target.value})}
                />
              </div>
              <div>
                <button onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default InventoryPage;
