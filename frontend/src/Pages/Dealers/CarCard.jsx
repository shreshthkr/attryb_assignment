import React, { useState } from 'react'
import "./CarCard.css";
import axios from 'axios';
import {FiEdit} from "react-icons/fi";
import {AiFillDelete} from "react-icons/ai";
import { useToast,useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button
  } from '@chakra-ui/react'
const CarCard = ({cars}) => {
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [formData, setFormData] = useState({mileage:null,color:"",price:null})


  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
  }



 const handleUpdate = () => {
    fetch(`http://localhost:8080/inventory/inventory/${cars._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data); 
          
          window.location.reload();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
 
 const handleDelete = () => {
    axios.delete(`http://localhost:8080/inventory/inventory/${cars._id}`)
       .then((res)=>{
        toast({
            position:"top",
            title: 'Inventory Deleted',
            description: 'Inventory deleted successfully',
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
        window.location.reload();
       })
       .catch((err)=>{
        console.log(err);
       })
}

  return (
    <div className='car-card'>
      <div className='car-image'>
        <img src={cars.image} alt={cars.model} />
        </div>
        <div className='car-details'>
          <p>{cars.model}</p>
          <div>
            <p>Color:{cars.originalPaint}</p>
            <p>Price:₹{cars.price}</p>
            <p>Location:{cars.registrationPlace}</p>
          </div>
          <div className='car-edit'>
            <FiEdit onClick={onOpen} />
            <Modal isOpen={isOpen} onClose={onClose} size={"lg"} backgroundColor="white" marginTop="50px">
        <ModalOverlay />
        <ModalContent backgroundColor="white" width="50%" >
          <ModalHeader backgroundColor="white" color={"teal"} fontSize={"30px"} fontWeight={600}>Update inventory</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody  style={{
                width: "90%",
                display: "flex",
                flexDirection:"column",
                justifyContent: "space-between",
                gap: "20px",
                height: "400px",
                backgroundColor:"white"
              }}>
                <div  style={{
                        width: "100%",
                        height: "85px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        gap: "5px",
                      }}>
                <label style={{
                          fontWeight: "600",
                          color: "black",
                        }}>Enter new Milaege</label>
           <input type="number" placeholder='Enter new mileage'  style={{
                          width: "100%",
                          height: "45px",
                          border: "1px solid gray",
                          borderRadius: "5px",
                          fontSize:"15px"
                        }}
                      name="mileage"
                      value={formData.mileage}
                      onChange={handleChange}  
                        />
                </div>
           <div  style={{
                        width: "100%",
                        height: "85px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        gap: "5px",
                      }}>
           <label style={{
                          fontWeight: "600",
                          color: "black",
                        }}>Enter new color</label>
           <input type="text" placeholder='Enter new color'
           name="color"
           value={formData.color}
           onChange={handleChange} 
           style={{
                          width: "100%",
                          height: "45px",
                          border: "1px solid gray",
                          borderRadius: "5px",
                          fontSize:"15px"
                        }} />
           </div>
          <div  style={{
                        width: "100%",
                        height: "85px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        gap: "5px",
                      }}>
          <label style={{
                          fontWeight: "600",
                          color: "black",
                        }}>Enter new price</label>
           <input type="number" placeholder='Enter new price'
           
           name="price"
                      value={formData.price}
                      onChange={handleChange} 
           style={{
                          width: "100%",
                          height: "45px",
                          border: "1px solid gray",
                          borderRadius: "5px",
                          fontSize:"15px"
                        }} />
          </div>
    
          </ModalBody>

          <ModalFooter  backgroundColor="white" marginBottom={"30px"}>
            <Button colorScheme='blue' mr={3} w="150px" height={"35px"} border={'none'}
              backgroundColor={"teal"} borderRadius={"5px"} color={"white"}
              onClick={() => {onClose();handleUpdate()}}
            >
              Submit
            </Button>
    
          </ModalFooter>
        </ModalContent>
      </Modal>
            <AiFillDelete onClick={handleDelete} />
          </div>
          
        </div>
    </div>
  )
}

export default CarCard
