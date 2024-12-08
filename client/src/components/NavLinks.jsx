import { useDashboardContext } from "../pages/DashboardLayout";
import Links from "../utils/Links";
import { NavLink } from "react-router-dom";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSideBar, user } = useDashboardContext();
  return (
    <div className="nav-links">
      {Links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            end
            onClick={isBigSidebar ? null : toggleSideBar}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
