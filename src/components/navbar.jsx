import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
     <div className="App">
      <header className="App-header">
        <h1>Tasty Novel</h1>
      </header>

        <div className='row'>
        <div className="col-md-12">
            <div className="navbar navbar-expand-md navbar-light bg-light">
                <Link to={"/"} className='navbar-brand'>Sweet 'n' Savery</Link>
                <button  className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarcollapse">
                    <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id="navbarcollapse">
                        <div className='navbar-nav'>
                            <Link to={'/'} className='nav-link active'>Home</Link>
                            <Link to={'/addproduct'} className='nav-link'>Add Products</Link>
                            <Link to={'/signup'} className='nav-link'>Signup</Link>
                            <Link to={'/signin'} className='nav-link'>Signin</Link>
                         
                        </div>
                    </div>
                    

            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar;