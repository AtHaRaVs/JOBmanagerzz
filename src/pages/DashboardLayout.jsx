import { Outlet } from "react-router-dom";
import { BigSidebar, SmallSidebar, Navbar } from "../components";
import Wrapper from "../assets/wrappers/Dashboard";
import { useState } from "react";

const DashboardLayout = () => {
  const user = { name: "Jhon" };

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("toggle dark theme");
  };

  const toggleSideBar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("Logout User");
  };

  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default DashboardLayout;
