import React from 'react'
import ImageHome from '../components/ImageHome'
import Material from '../components/Material'
import Table from '../components/Table'
import OrderDetails from '../components/OrderDetails'

function Home() {
  return (
    <div id='home'>
    <ImageHome></ImageHome>
    <div className="containers" style={{backgroundColor:'black', top:'0'}}>
        <div id="aboutus">
        <h2 className="text-center pt-5 text-warning">About <span className='text-light'>Us</span></h2>
        <div className="row">
            <div className="col-md-5">
                <img className='img-fluid p-5' src="https://cdn.pixabay.com/photo/2020/02/02/17/06/living-room-modern-tv-4813589_1280.jpg" alt="" />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 text-justify">
             <p className='text-light  p-4'>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type love the specimen book.
             <br />
             <br />
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
             </p>
            </div>
        </div>

        </div>
      
    <Table></Table>
   <Material></Material>
   <OrderDetails></OrderDetails>
    </div>
    </div>
  )
}

export default Home