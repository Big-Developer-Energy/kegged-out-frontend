import { Nav, NavItem, Input, Button } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";

const Navigation = ({ currentUser, logout }) => {
  const navigate = useNavigate();


  const handleClick = () => {
    logout();
    navigate("/");
  };

  return (
    <Nav className="nav">
      {currentUser && (
        <NavItem>
          <Input type="button" value="Logout" onClick={handleClick} />
        </NavItem>
      )}
      {!currentUser && (
        <>
          <NavItem>
            <NavLink to="/login" className="nav-link">
              Log In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/signup" className="nav-link">
              Sign Up
            </NavLink>
          </NavItem>
        </>
      )}
    </Nav>
  );
};

export default Navigation;
