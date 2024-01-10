import { Nav, NavItem, Input } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";

const Navigation = ({ currentUser, logout }) => {
  const navigate = useNavigate();

  let current_user = currentUser;

  const handleClick = () => {
    logout();
    navigate("/");
  };

  return (
    <Nav className="nav">
      {current_user && (
        <NavItem>
          <Input type="button" value="Logout" onClick={handleClick} />
        </NavItem>
      )}
      {!current_user && (
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
