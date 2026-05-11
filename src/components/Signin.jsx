import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import { Eye, EyeOff } from "lucide-react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    setLoading("Please wait as we sign you in...");
    setError("");

    try {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);

      const response = await axios.post(
        "https://mwaniki.alwaysdata.net/api/signin",
        data
      );

      setLoading("");

      // Save user properly
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      // Redirect
      navigate("/");

    } catch (err) {
      setLoading("");
      setError("Invalid email or password");
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="row mt-4 justify-content-center">
        <div className="col-md-6 card shadow p-4 text-center">
          <h1 className="mb-3">Sign in</h1>

          <h5 className="text-info">{loading}</h5>
          <h5 className="text-danger">{error}</h5>

          <form onSubmit={submit}>

            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

        

            <div className="password-container position-relative">
              <input
                className="form-control"
                required
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                className="position-absolute top-50 end-0 translate-middle-y me-3"
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </span>
            </div>

            <br />

            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>

          <p className="text-secondary mt-3">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;