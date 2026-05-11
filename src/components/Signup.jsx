import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import{Eye,EyeOff} from "lucide-react"

const Signup = () => {
    // hooks to hold our inputs,will be updated later in our program
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    // hooks to update user on what is happening
    const [loading, setLoading] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    // asyncronous function allows the await so that it does not proceed with other lines of code untill the response has been recieved because it is coming from a differeent server and there may be network issues or slow.
    const submit = async (e) => {
        // this is a function that prevents the page from reloading and clearing our hooks and reseting our hooks/state variables
        e.preventDefault()
        setError("")
        setSuccess("")
        setLoading("Please wait as we register you...")
        try {
            // formdata object to store our key value pairs
            const data = new FormData()
            // append the key value 
            data.append("username", username)
            data.append("email", email)
            data.append("password", password)
            data.append("phone", phone)
            // sending the post request to our flask api
            // axios is a library that helps us to make different http requestFormReset(getComputedStyle,post etc)
            const response = await axios.post("https://mwaniki.alwaysdata.net/api/signup", data)
            setLoading("")
            setSuccess(response.data.message)

            // clear the form
            setUsername("")
            setEmail("")
            setPassword("")
            setPhone("")

        } catch (error) {
            setError(error.message)

        }

    }

  return (

    <div>
       <Navbar/>
       <div className="row mt-4 justify-content-center">
            <div className="col-md-6 card shadow p-3 text-center">
                <h1>Sign Up</h1>
                <h5 className="text-info">{loading}</h5>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text-success">{success}</h5>
                <form onSubmit={submit}>
                    <input type="text" className="form-control" placeholder="Enter Username" required value={username} onChange={(e) => setUsername(e.target.value)} /> <br />

                    <input type="email" className="form-control" placeholder="Enter Email" required value={email} onChange={(e) => setEmail(e.target.value)} /> <br />

                    <input type="tel" className="form-control" placeholder="Enter Phone Number" required value={phone} onChange={(e) => setPhone(e.target.value)} /> <br />

                    <div className="password-container">
                        <input
                        className="form-control" required
                         type={password ? "text" : "password"}
                            placeholder="Enter your password"
                    />

                    <span
                        className="icon"
                        onClick={() => setPassword(!password)}
                        >
                        {password ? <EyeOff size={20} /> : <Eye size={20} />}
                    </span>
                    </div> <br /> <br />

                    <button type="submit" className="btn btn-primary">Signup</button>

                </form> <br />
                <p className="text-secondary">Already havean account? <Link to={'/signin'}>Sign In</Link></p>

            </div>

        </div>
    </div>
  )
}

export default Signup;