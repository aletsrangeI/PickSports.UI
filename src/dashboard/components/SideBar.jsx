import { useDispatch, useSelector } from "react-redux";
import "./sidebar.css";
import image from "./../../assets/images/d158ccef5dc0cadde05bdd0b7521a34d.jpg";
import {
  changingMaxSideBar,
  changingMiniSideBar,
  changingTheme,
} from "../../store/ui/thunks";

export const SideBar = () => {
  const dispatch = useDispatch();
  const nombres = useSelector((state) => state.auth.nombres);
  const { isDarkMode, isMiniSidebar, isMaxSidebar } = useSelector((state) => ({
    isDarkMode: state.ui.darkmode,
    isMiniSidebar: state.ui.miniSideBar,
    isMaxSidebar: state.ui.maxSideBar,
  }));
  const innerWidth = window.innerWidth <= 400 ? true : false;

  const toggleMiniSidebar = () => {
    dispatch(changingMiniSideBar(!isMiniSidebar));
  };

  const toggleDarkMode = () => {
    dispatch(changingTheme(!isDarkMode));
    let body = document.body;
    body.classList.toggle("dark-mode");
  };

  const toggleMaxSideBar = () => {
    dispatch(changingMaxSideBar(!isMaxSidebar));
  };

  return (
    <>
      <div className={`menu ${isMiniSidebar ? "mini" : ""}`}>
        <ion-icon
          onClick={toggleMaxSideBar}
          name={isMaxSidebar ? "close-outline" : "menu-outline"}
        ></ion-icon>
      </div>
      <div
        className={`barra-lateral 
        ${isMiniSidebar || innerWidth ? "mini-barra-lateral" : ""} 
        ${isMaxSidebar ? "max-barra-lateral" : ""}
        `}
      >
        <div>
          <div className="nombre-pagina">
            <ion-icon
              onClick={toggleMiniSidebar}
              id="logo"
              name="american-football-outline"
            ></ion-icon>
            <span
              className={`
            ${isMiniSidebar || innerWidth ? "oculto" : ""}`}
              id="pageName"
            >
              PickSports
            </span>
          </div>
          <button className="boton">
            <ion-icon name="add-outline"></ion-icon>
            <span className={`${isMiniSidebar || innerWidth ? "oculto" : ""}`}>
              Nueva
            </span>
          </button>
        </div>
        <nav className="navegacion">
          <ul>
            <li>
              <a href="">
                <ion-icon name="settings-outline"></ion-icon>
                <span
                  className={`${isMiniSidebar || innerWidth ? "oculto" : ""}`}
                >
                  Config
                </span>
              </a>
            </li>
            {/* Resto de los elementos de navegación */}
          </ul>
        </nav>
        <div>
          <div className="linea"></div>
          <div className="modo-oscuro">
            <div className="info">
              <ion-icon name="moon-outline"></ion-icon>
              <span
                className={`${isMiniSidebar || innerWidth ? "oculto" : ""}`}
              >
                dark mode
              </span>
            </div>
            <div className="switch" onClick={toggleDarkMode}>
              <div className={`base`}>
                <div
                  className={`circulo ${isDarkMode ? "prendido" : ""}`}
                ></div>
              </div>
            </div>
          </div>
          <div className="usuario">
            <img src={image} alt="" />
            <div className="info-usuario">
              <div className="nombre-email">
                <span
                  className={`nombre ${
                    isMiniSidebar || innerWidth ? "oculto" : ""
                  }`}
                >
                  {nombres}
                </span>
                <span
                  className={`email ${
                    isMiniSidebar || innerWidth ? "oculto" : ""
                  }`}
                >
                  {nombres.toLowerCase().replace(" ", ".")}@example.com
                </span>
              </div>
              <ion-icon name="ellipsis-vertical-outline"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
