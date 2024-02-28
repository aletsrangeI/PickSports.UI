import { useSelector } from "react-redux";
import "../../styles/styles.css";
import { DashboardLayout } from "../layout";
import "./../components/sidebar.css";

export const DashboardPage = () => {
  const { isMiniSidebar } = useSelector((state) => ({
    isMiniSidebar: state.ui.miniSideBar,
  }));

  const innerWidth = window.innerWidth <= 400 ? true : false;

  return (
    <>
      <DashboardLayout />
      <main
        className={`
      ${isMiniSidebar || innerWidth ? "min-main" : ""}`}
      >
        {isMiniSidebar ? <h1>true</h1> : <h1>false</h1>}
        <h1>aaaaaaaaaaaa</h1>
      </main>
    </>
  );
};
