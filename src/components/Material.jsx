import React, {  useState } from 'react'
import { Form,Row } from 'react-bootstrap'
import { orderMaterial } from '../services/AllAPIs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Material() {
  const [uploadData, setUploadData] = useState({
    id: "",
    buildingid: "",
    orderdescription: "",
    buildingname: "",
    buildingaddress:"",
    remarks:""
    });
    const setInput = (e)=>{
      const {name,value} = e.target
      setUploadData({...uploadData,[name]:value})
    }

  const handleOrderMaterial = async ()=>{
    const {id,buildingid,orderdescription,buildingname,buildingaddress,remarks} = uploadData
    if (!id || !buildingid || !orderdescription || !buildingname || !buildingaddress || !remarks){
      toast.warning("Please fill the form")
    }
    else{
      // make api call
      const response = await orderMaterial(uploadData)
      if(response.status>=200 && response.status<300){
        setUploadData(response.data);
        
       toast.success("New order placed successfullyyy!!!")
       
      }
      else{
        toast.warning("Provide a unique id")
      }
    }
    
  }
  return (
    <>
    
    <div className="container mt-4 " id='makeorder'>
    <h2 className="text-center text-light">
       <span className="text-warning">ADD </span> ORDERS
      </h2>
       <div className="row mt-3">
        <div className="text-light pt-5 pb-4 mb-4" style={{borderColor:'white',border:'solid',borderBlockWidth:'0.5px'}}>
        <Form>         
            <Row>
            <div className="mb-3 col-lg-3 d-flex fw-bold">
          <label>ORDER LIST ID</label>
          <input
            type="text" onChange={setInput}
            className="form-control "
            placeholder="XXXX" name="id"
          />
        </div>  
        <div className="mb-3 col-lg-3 d-flex text-danger fw-bold">
          <label>BUILDING ID</label>
          <input
            type="text" onChange={setInput}
            className="form-control "
            placeholder="XXXX" name="buildingid"
          />
        </div>  
        <div className="mb-3 col-lg-3 d-flex text-danger fw-bold ">
          <label>BUILDING NAME</label>
          <input onChange={setInput}
            type="text"
            className="form-control "
            placeholder="XXXX" name="buildingname"
          />
        </div>  
        <div className="mb-3 col-lg-3 d-flex text-danger fw-bold">
          <label>BUILDING ADDRESS</label>
          <input onChange={setInput}
            type="text"
            className="form-control "
            placeholder="XXXX" name="buildingaddress"
          />
        </div>          
            </Row>
            <div className="mb-3 col-lg-4 d-flex fw-bold ">
          <label>ORDER DESCRIPTION</label>
          <input onChange={setInput}
            type="text"
            className="form-control "
            placeholder="XXXX" name="orderdescription"
          />
        </div>
        <div className="mb-3 col-lg-4 d-flex align-items-center fw-bold ">
          <label>REMARKS</label>
          <input onChange={setInput}
            type="text"
            className="form-control "
            placeholder="XXXX" name="remarks"
          />
        </div>

        </Form>
        <div className='text-center'>
        <button onClick={handleOrderMaterial} className="btn btn-success fw-bold">ADD MATERIAL ORDERS </button>

        </div>
        

        </div>
        
       </div>
    </div>
    
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark" />

    </>
  )
}

export default Material