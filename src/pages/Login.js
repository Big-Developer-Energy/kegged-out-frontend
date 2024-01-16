import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import beerflight from "../assets/beerflight.jpg";

const Login = ({ login }) => {
  const navigate = useNavigate();

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const data = Object.fromEntries(formData);

    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    login(userInfo);
    navigate("/");
    e.target.reset();
  };

  return (
    <div>
      <h1 className="login-header">Login</h1>
      <div className="login-info">
        <form ref={formRef} onSubmit={handleSubmit}>
          Email: <input type="email" name="email" placeholder="email" />
          <br />
          Password:{" "}
          <input type="password" name="password" placeholder="password" />
          <br />
          <input type="submit" value={"Submit"} />
        </form>
        <br />
        <div>
          Already registered,{" "}
          <a href="/login" className="registration-login">
            LOGIN
          </a>{" "}
          here!{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;
