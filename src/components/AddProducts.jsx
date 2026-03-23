import axios from "axios";
import { useState } from "react";
import Navbar from './navbar'

const AddProducts=()=>{
    const [product_name,setProductname]=useState("")
    const[product_description,setProductdescription]=useState("")
    const[product_cost,setProductcost]=useState("")
    const[product_photo,setProductphoto]=useState("")

    const [loading,setLoading]=useState("")
    const[error,setError]=useState("")
    const[success,setSuccess]=useState("")

    const submit=async(e)=>{
        e.preventDefault("")
        setLoading("Please wait as we upload...")
        try{
            const data=new FormData()

            data.append("product_name",product_name)
            data.append("product_description",product_description)
            data.append("product_cost",product_cost)
            data.append("product_photo",product_photo)

            const response=await axios.post("https://mwaniki.alwaysdata.net/api/add_product",data)
            setLoading("") 
            setError("")
            setSuccess(response.data.message)
            console.log(response)

            setProductname("")
            setProductdescription("")
            setProductcost("")
            setProductphoto("")


        }catch(error){
            setLoading("")
            setSuccess("")
            setError("error.message")

        }

    }
  return (
    <div>
      <Navbar/>
              <div className="row mt-4 justify-content-center">
            <div className="card shadow text-center p-3 col-md-6">
                <h1>Add Products</h1>
                <h6 className="text-info">{loading}</h6>
                <h6 className="text-danger">{error}</h6>
                <h6 className="text-success">{success}</h6>
                <form onSubmit={submit}>
                    
                    <input type="text" className="form-control " placeholder="Enter Product Name" required value={product_name} onChange={(e)=>setProductname(e.target.value)}/> <br />

                    
                    <input type="text" className="form-control" placeholder="Describe Product" required value={product_description} onChange={(e)=>setProductdescription(e.target.value)}/> <br />

                    
                    <input type="number" className="form-control" placeholder="Enter Product Cost" required value={product_cost} onChange={(e)=>setProductcost(e.target.value)} /> <br />

                    <b className="text-primary">Browser/upload Product Photo</b> <br />

                    <input type="file" className="form-control" required accept="image/*"   onChange={(e)=>setProductphoto(e.target.files[0])}/> <br />

                    <button type="submit" className="btn btn-primary" >Add Product</button>
                </form>
            </div>
            

        </div>
    </div>
  )
}

export default AddProducts;