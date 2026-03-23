import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";
import Carousel from "./Carousel";

const GetProducts = () => {

  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")
  // usenavigate hook for navigating different components
  const navigate = useNavigate()

  const img_url = "https://mwaniki.alwaysdata.net/static/images/"

  const getProducts = async () => {
    try {
      setLoading("Please wait as we load products...")

      const response = await axios.get("https://mwaniki.alwaysdata.net/api/get_product_details")
      console.log(response)
      setLoading("")
      setProducts(response.data)
    } catch (error) {
      setLoading("")
      setError(error.message)

    }
  }

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div>
        
      <Navbar />
      <Carousel/>
      <div className="row container-fluid mt-4 text-center">
        <h1 className="text-primary">Available Products</h1>
        <h6 className="text-info">{loading}</h6>
        <h6 className="text-danger">{error}</h6>

        {products.map((product) => (
          <div className="justify-content-center col-md-3">
            <div className="card shadow p-4 mt-2">
              <img src={img_url + product.product_photo} alt="" className="product_img img_hover" />
              <div className="card-body">
                <h5>{product.product_name}</h5>
                <p className="text-muted">{product.product_cost}</p>
                <b className="text-warning">{product.product_description}</b> <br /> <br />
                <button className="btn btn-dark" onClick={() => navigate("/makepayment", { state: { product } })}>Buy now</button>
              </div>
            </div>


          </div>
        ))}
      </div> <br /> <hr />
      <Footer/>
      
    </div>
        
  )
}

export default GetProducts;