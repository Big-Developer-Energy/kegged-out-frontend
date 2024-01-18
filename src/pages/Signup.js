import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "reactstrap";
import beercheer from "../assets/beercheer.jpg";

const Signup = ({ signup }) => {
  const navigate = useNavigate();

  const formRef = useRef();

    // function for updating useState for modal
  const [isModalOpen, setIsModalOpen] = useState(false); 


  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    signup(userInfo);
    navigate("/");

    // modal value
    setIsModalOpen(true);
   
    // original syntax below
    // e.target.reset();
  };

  // the const made for the modal
  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
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
        Already registered,{" "}
        <a href="/login" className="registration-login">
          LOGIN
        </a>{" "}
        here!{" "}
      </div>


{/* this is the modal added for age verification */}
      <Modal
        isOpen={isModalOpen}
        onREquestClose={closeModal}
        contentLabel="Age Verification"
      >
        <h2>Are you over 21?</h2>
        <button onClick={closeModal}>Yes</button>
        <button onClick={closeModal}>No</button>
      </Modal>


    </div>
  );
};

export default Signup;
