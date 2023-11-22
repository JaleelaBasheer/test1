import React, { useState, useEffect } from 'react'
import { getorderMaterial } from '../services/AllAPIs';
import { Row } from 'react-bootstrap';

function OrderDetails() {

    const [saveState, setsavetState] = useState(false);
  const [deleteState, setdeleteState] = useState(false);
  const [cancelState, setcancelState] = useState(false);
  const [allOrderMaterial,setallOrderMaterial] = useState([]);

  const handleMouseIn = ()=>{
    setsavetState(true);
  }
  const handleMouseOut = ()=>{
    setsavetState(false);
  }
  const handledeleteMouseIn = ()=>{
    setdeleteState(true);
  }
  const handledeleteMouseOut = ()=>{
    setdeleteState(false);
  }
  const handlecancelMouseIn = ()=>{
    setcancelState(true);
  }
  const handlecancelMouseOut = ()=>{
    setcancelState(false);
  }
  const getallorderMaterial = async()=>{

    const response = await getorderMaterial()
    setallOrderMaterial(response.data)
  }
  useEffect(()=>{
    getallorderMaterial()
  },[])

  
  return (
    <>
    <div className='mt-5 mb-3' id='orderdetails'>
      <h2 className="text-center text-light">
       <span className="text-warning">ORDER</span> DETAILS
      </h2>
      <Row>
        <div className="col-lg-1"></div>
        <div className="col mt-3">
        <table className='table table-stripped table-success'>
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">BUILDING ID</th>
      <th scope="col">BUILDING NAME</th>
      <th scope="col">BUILDING ADDRESS</th>
      <th scope="col">ORDER ID</th>
      <th scope="col">ACTION</th>


    </tr>
  </thead>
  <tbody>
  { 
  allOrderMaterial.map((item,index)=>(
    <tr>
    <th scope="row">{index+1}</th>
    <td>{item.buildingid}</td>
    <td>{item.buildingname}</td>
    <td>{item.buildingaddress}</td>
    <td>{item.id}</td>
    <td>
      <div className="icons d-flex">
        <div className="d-block">
        <div onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
        <i class="fa-regular fa-floppy-disk fs-3 text-success"></i>         
      </div>
      <div>
      {
      saveState && (
        <>           
          <p>save</p>
        </>          
      )}
      </div>
        </div>
        <div className="d-block">
        <div onMouseOver={handledeleteMouseIn} onMouseOut={handledeleteMouseOut}>
      <i class="fa-solid fa-trash fs-3 ps-2 text-danger"></i>
      </div>
      <div>
      {
      deleteState && (
        <div>           
          <p>delete</p>
        </div>          
      )}
      </div>            
        </div>
        <div className="d-block">
        <div onMouseOver={handlecancelMouseIn} onMouseOut={handlecancelMouseOut}>
      <i class="fa-solid fa-xmark fs-3 ps-2"></i>
      </div>
      <div>
      {
      cancelState && (
        <div>           
          <p>cancel</p>
        </div>          
      )}
      </div>
        </div>       
     
        </div>       
    </td>
  </tr>

  ))
  }
   
    </tbody>
    </table>

        </div>
        <div className="col-lg-1"></div>

      </Row>
    
    </div>
    </>
  )
}

export default OrderDetails