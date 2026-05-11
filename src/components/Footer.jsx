import React from 'react'

const Footer = () => {

  return (
        

          <div className =" row fs-6 text-light p-3 text-center">
                <div className='col-md-4 bg-warning text-dark'>
                    <h1>About us</h1>
                    <p>Welcome to The Rustic Table
                        Located in the heart of downtown, The Rustic Table was born from a passion for honest cooking and farm-fresh ingredients. Founded in 2015 by Chef Elena Rodriguez, our restaurant brings the cozy atmosphere of a farmhouse kitchen to the city.</p>
                </div>
                <div className='col-md-4 bg-dark'>
                    <form action="">
                        <input type="email" placeholder='Enter Your Email' className='form-control' /> <br />
                        <textarea name="" id="" cols="30" rows="5" placeholder="Leave a comment..." class="form-control"></textarea> <br />
                        <input type="submit" value={"send message"} className='btn btn-danger'/>

                    </form>

                </div>

            <div className="col-md-4 text-center text-dark bg-warning" >
                <h4>Stay connected</h4>
                <a href="https://www.facebook.com"><img src="images/fb.png" alt=""/></a>
                <a href="https://www.instagram.com"><img src="images/in.png" alt=""/></a>
                <a href="https://www.x.com"><img src="images/x.png" alt=""/></a> <br />
                <p class="mt-3">Many restaurants, including those offering expensive desserts, often do not make them in-house, but rather buy them from external suppliers to save time and focus on savory dishes. Additionally, the busiest day for most restaurants is Saturday, while the slowest is typically Monday. We hope this gives you a better insight.</p>
            </div>

               <br /> <h4 className='fs-6 bg-dark text-light p-3 text-center mt-4'>Created by Mwaniki. &copy;2026. All rights Reserved</h4>
          </div>
          
  )
}

export default Footer;