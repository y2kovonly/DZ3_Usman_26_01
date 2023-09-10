import { NavLink, Outlet } from "react-router-dom";
import './Layout.css'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={"/users"}>
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;
