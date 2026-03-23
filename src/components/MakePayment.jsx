import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './navbar'

const MakePayment = () => {
    // destructure data passed to this component
    // retrieving/extracting product that has been pased for payment
    const{product}=useLocation().state || {}
    console.log(product)
    const [phone,setPhone]=useState("")
    const[message,setMessage]=useState("")
    const [error,setError]=useState("")
    const submit=async (e)=>{
        e.preventDefault()
        setError("")
        setMessage("Please wait as we process your payment")

        try {
            const data=new FormData()
            data.append("phone",phone)
            data.append("amount",product.product_cost)

            const response=await axios.post("https://mwaniki.alwaysdata.net/api/mpesa_payment",data)
            console.log(response)
            setMessage(response.data.message)
        } catch (error) {
            setMessage("")
            setError(error.message)
            
        }

    }
    // img_url
    const img_url="https://mwaniki.alwaysdata.net/static/images/"
  return (
    <div>
        <Navbar/>
         <div className='row justify-content-center mt-3 text-center'>
           <h1 className='text-success'>Lipa na Mpesa</h1>
           <h6 className='text-success'>{message}</h6>
           <h6 className='text-danger'>{error}</h6>
           <div className="col-md-6">
            <div className="card shadow">
                <img src={img_url+product.product_photo} alt="" className='product_img' />
                <div className="card-body">
                <p className='text-muted'>Product Name:{product.product_name}</p>
                <p className='text-muted'>product Desc:{product.product_description}</p>
                <p className='text-warning'>Cost:{product.product_cost}</p>

                <form onSubmit={submit}>
                    <p className='text-start text-primary'>Phone number to make payment</p>
                    <input type="tel" placeholder='254...' className='form-control' required value={phone} onChange={(e)=>setPhone(e.target.value)} /> <br />
                    <button type='submit' className='btn btn-success'>Pay Now</button>
                </form>
                </div>
            </div>
           </div>
    </div>
    </div>
  )
}

export default MakePayment;