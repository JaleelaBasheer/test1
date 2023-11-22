import React from 'react'

function ImageHome() {
  return (
    <>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel ">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{width:'100%', height:'500px'}} src="https://cdn.pixabay.com/photo/2015/04/04/22/07/stone-707172_1280.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>VIRTUALLY <span className='text-warning'>BUILD YOUR</span>HOUSE</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate debitis ut.</p>
      </div>

     
    </div>
    <div class="carousel-item">
      <img style={{width:'100%', height:'500px'}} src="https://cdn.pixabay.com/photo/2015/09/09/21/37/concrete-933563_1280.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>VIRTUALLY <span className='text-warning'>BUILD YOUR</span>HOUSE</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate debitis ut.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img style={{width:'100%', height:'500px'}} src="https://cdn.pixabay.com/photo/2016/01/25/18/21/wood-1161205_1280.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>VIRTUALLY <span className='text-warning'>BUILD YOUR</span>HOUSE</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate debitis ut.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default ImageHome