import React from 'react'

const Carousel = () => {
  return (
    <div>
        <section className="row">
            <div className="col-md-12">
              
                <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">
                      
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="images/ca.jpeg" alt="" className="w-100 d-block" height={400} />
                        </div>

                        <div className="carousel-item">
                            <img src="images/ca2.jpeg" alt="" className="w-100 d-block" height={400}/>
                        </div>
                        <div className="carousel-item">
                            <img src="images/ca3.jpeg" alt="" className="w-100 d-block" height={400}/>
                        </div>
                        <div className="carousel-item">
                            <img src="images/ca4.jpeg" alt="" className="w-100 d-block" height={400}/>
                        </div>
                    </div>
                    
                     <a href="#mycarousel" data-bs-slide="prev" className="carousel-control-prev">
                        <span className="carousel-control-prev-icon bg-danger"></span>
                     </a>
                     <a href="#mycarousel" className="carousel-control-next" data-bs-slide="next">
                        <span className="carousel-control-next-icon bg-danger"></span>
                     </a>

                </div>

            </div>

          </section>
    </div>
  )
}

export default Carousel