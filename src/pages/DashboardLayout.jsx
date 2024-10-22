import { Outlet } from "react-router-dom";
import { BigSidebar, SmallSidebar, Navbar } from "../components";
import Wrapper from "../assets/wrappers/Dashboard";
import { createContext, useContext, useState } from "react";

const dashboardContext = createContext();

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
    <dashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSideBar,
        logoutUser,
      }}
    >
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
    </dashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(dashboardContext);
export default DashboardLayout;
