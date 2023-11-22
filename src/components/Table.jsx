import React ,{useEffect , useState }  from 'react'
import { addMaterial, deleteMaterial, getMaterial } from '../services/AllAPIs';
import { Row ,Modal,Button,Form,FloatingLabel} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Table() {
  const [allMaterials, setallMaterials] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [uploadData, setUploadData] = useState({
    image: "",
    id:"",
    materialid: "",
    materialdescription: "",
    currentqty: "",
    previousqty:"",
    qtydiff:"",
    ordercomment:""
    });
    const setInput = (e)=>{
      const {name,value} = e.target
      setUploadData({...uploadData,[name]:value})
    }
    console.log(uploadData);

  const handleOrderMaterial = async ()=>{
    const {image,id,materialid,materialdescription,currentqty,previousqty,qtydiff,ordercomment} = uploadData
    if (!image || !id || !materialid || !materialdescription || !currentqty || !previousqty || !qtydiff || !ordercomment){
      toast.warning("Please fill the form")
    }
    else{
      // make api call
      const response = await addMaterial(uploadData)
      if(response.status>=200 && response.status<300){
        setUploadData(response.data);
        
       toast.success("New material added successfullyyy!!!")
      }
      else{
        toast.warning("Provide a unique id")
      }
    }
  }
    // all materials
  const getallMaterial = async()=>{

    const response = await getMaterial()
    setallMaterials(response.data)
  }
  //  remove material
  const removeItem = async (e,id)=>{
        e.preventDefault()

    // make api call
    const response = await deleteMaterial(id)
    getallMaterial()
  }
 
  useEffect(()=>{
    getallMaterial()
  },[])

  return (
    <>
    <div className='mt-5' id='ourmaterials'>
      <h2 className="text-center text-light">
       <span className="text-warning">OUR</span>  MATERIALs
      </h2>

    <Row>
      <div className="col-lg-1"></div>
      <div className="col p-3">
      <table className='table table-borderless table-danger text-center' size="sm" >
  <thead >
    <tr>
      <th scope="col"></th>
      <th scope="col">OrderList1 <br />temNrUID </th>
      <th scope="col">ITEM NR</th>
      <th scope="col" className='text-danger'>MATERIAL ID</th>
      <th scope="col" className='text-danger'>MAT.DESCRIPTION</th>
      <th scope="col">CURRENT QTY</th>
      <th scope="col">PREVIOUS QTY</th>
      <th scope="col">QTY DIFF</th>
      <th scope="col">Order Comment </th>
      <th scope="col"><button  onClick={handleShow} className='text-center fw-bold' style={
        {width:'25px', height:'25px',border:'none', borderRadius:'50%', backgroundColor:'#0d6efd'}
      }>+</button></th>


    </tr>
  </thead>
  <tbody>
          { allMaterials.map((material,index)=>(

    <tr>
      <th><img  src={material.image}alt="" /></th>
      <th>{material.id}</th>
      <th scope='row' >{index+1}</th>
      <th>{material.materialid}</th>
      <th>{material.materialdescription}</th>
      <th>{material.currentqty}</th>
      <th>{material.previousqty}</th>
      <th>{material.qtydiff}</th>
      <th>{material.ordercomment}</th> 
      <th >
      <button onClick= {e=>removeItem(e,material.id)} className='text-center fw-bold' style={
        {width:'25px', height:'25px',border:'none', borderRadius:'50%', backgroundColor:'red'}
      }>-</button>
      </th>
    </tr>
    ))
       } 
    
  </tbody>
  
    </table>
      </div>
    
    <div className="col-lg-1"></div>
    
    </Row>

    </div>


{/* ------------------ */}
{/* <div className="container mt-3 p-3">
  <Row>
    <Col>
    <table className="table table-borderless">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    </Col>
  </Row>
</div> */}
  

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Material Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form >
            <FloatingLabel onChange={setInput} className='mb-3' controlId="floatingimage" label="Image">
        <Form.Control  name="image" type="text" placeholder="Image" />
      </FloatingLabel>
                <FloatingLabel onChange={setInput} className='mb-3' controlId="floatingid" label="Order List Id">
        <Form.Control type="text" name="id" placeholder="Order List Id" />
      </FloatingLabel>

      <FloatingLabel onChange={setInput} className='mb-3' controlId="floatingmaterialid" label="Material Id">
        <Form.Control  type="text" name="materialid" placeholder="Material Id" />
      </FloatingLabel>

      <FloatingLabel onChange={setInput} className='mb-3' controlId="materialdescription" label=" Material Description">
        <Form.Control   name="materialdescription" type="text" placeholder=" Material Description" />
      </FloatingLabel>

      <FloatingLabel onChange={setInput} className='mb-3' controlId="floatingcurrentqty" label="Current Quantity">
        <Form.Control  name="currentqty" type="text" placeholder="Current Quantity" />
      </FloatingLabel>

      <FloatingLabel onChange={setInput} className='mb-3' controlId="floatingpreviousqty" label="Previous Quantity">
        <Form.Control  name="previousqty" type="text" placeholder="Previous Quantity" />
      </FloatingLabel>
      <FloatingLabel onChange={setInput} className='mb-3' controlId="floatingqtydiff" label="Quantity Difference">
        <Form.Control  name="qtydiff" type="text" placeholder=" Quantity Difference" />
      </FloatingLabel>
      <FloatingLabel onChange={setInput} className='mb-3' controlId="floatingordercomment" label="Order Comment">
        <Form.Control  name="ordercomment" type="text" placeholder="Order Comment" />
      </FloatingLabel>

            </form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <div onClick={handleClose}>
          <Button onClick={handleOrderMaterial} variant="success">Add</Button>
          </div>

        </Modal.Footer>
      </Modal>

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

export default Table