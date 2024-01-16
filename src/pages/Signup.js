import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import beercheer from "../assets/beercheer.jpg";

const Signup = ({ signup }) => {
  const navigate = useNavigate();

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const data = Object.fromEntries(formData);

    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    signup(userInfo);
    navigate("/");
    e.target.reset();
  };

  return (
    <div className="signup-info">
      <h1 className="signup-header">Sign Up</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="input-container">
          Email: <input type="email" name="email" placeholder="email" />
        </div>
        <div className="input-container">
          Password:{" "}
          <input type="password" name="password" placeholder="password" />
        </div>
        <div className="input-container">
          Confirm Password:{" "}
          <input
            type="password"
            name="password_confirmation"
            placeholder="confirm password"
          />
        </div>
        <input type="submit" value={"Submit"} />
      </form>
      <br />
      <div className="registration-sentence">
        Already Registered, {" "} 
        <a href="/login" className="registration-login">
          LOGIN
          </a>{" "} 
          here!{" "}
      </div>
    </div>
  );
};

export default Signup;
