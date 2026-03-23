import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./navbar";

const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // hooks to inform user
    const[loading,setLoading]=useState("")
    const[error,setError]=useState("")

    // function to programmatically redirect to a different component
    const navigate=useNavigate()

    // function to handle signin
    const submit=async (e)=>{
        e.preventDefault()
        // console.log("sign in invoked")
        setLoading("Please wait as we sign you in...")

        try{
            // prepare data using the form data object
            // form data allows storing of key value pairs by use of method append
            const data=new FormData()
            data.append("email",email)
            data.append("password",password)

            // sending post request to our api endpoint
            // axios is a library that helps in snding of different  http requests i.e post/get etc
            // await is used in asynchronous function to pause for sometime until the response has been received
            // response - anytime you make a request to the server we wwill always have a response which will be stored in the response variable

            const response=await axios.post("https://mwaniki.alwaysdata.net/api/signin",data)
            setLoading("")

            // check if successful by use of response
            if(response.data.user){
                // redirect
                navigate("/")
            }else{
                setError(response.data.message)
            }


        }catch(error){
            setLoading("")
            setError(error.message)
        }



    }

  return (
    <div>
        <Navbar/>
    <div className="row mt-4 justify-content-center">
            <div className="col-md-6 card shadow p-4 text-center">
                <h1 className="mb-3">Sign in</h1>
                <h5 className="text-info">{loading}</h5>
                <h5 className="text-danger">{error}</h5>
                <form onSubmit={submit}>
                    <input type="email" className="form-control" placeholder="Enter Email" required value={email}
                        onChange={(e) => setEmail(e.target.value)} /> <br />

                    <input type="password" className="form-control" placeholder="Enter Password" required value={password} onChange={(e) => setPassword(e.target.value)} /> <br />

                    <button type="submit" className="btn btn-primary">Signin</button>


                </form>
                <p className="text-secondary">Don't have an account? <Link to={"/signup"}>Sign up</Link></p>
            </div>

        </div>
    </div>
  )
}

export default Signin;