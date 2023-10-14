import { NavLink } from "react-router-dom";

const Navbar = () => {
  const isActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "",
    color: isActive ? "#a855f7" : ""
  });

  return (
    <ul>
      <li>
        <NavLink to="/" style={isActiveStyle} className="nav-items">
          Income
        </NavLink>
      </li>
      <li>
        <NavLink to="/expense" style={isActiveStyle} className="nav-items">
          Expense
        </NavLink>
      </li>
      <li>
        <NavLink to="/saving" style={isActiveStyle} className="nav-items">
          Saving
        </NavLink>
      </li>
      <li>
        <NavLink to="/report" style={isActiveStyle} className="nav-items">
          Report
        </NavLink>
      </li>
    </ul>
  );
};

export { Navbar };
