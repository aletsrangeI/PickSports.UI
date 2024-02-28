import { useEffect } from "react";
import "./sidebar.css";
import { useSelector } from "react-redux";
import image from "./../../assets/images/d158ccef5dc0cadde05bdd0b7521a34d.jpg";

const navbar = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
let circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");

export const SideBar = () => {
  const handleClickLogo = () => {
    navbar.classList.toggle("mini-barra-lateral");
    spans.forEach((span) => {
      span.classList.toggle("oculto");
    });
  };

  const handleSwitch = () => {
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");
  };

  const handleMenu = () => {
    navbar.classList.toggle("max-barra-lateral");
    if (navbar.classList.contains("max-barra-lateral")) {
      menu.children[0].style.display = "none";
      menu.children[1].style.display = "block";
    } else {
      menu.children[0].style.display = "block";
      menu.children[1].style.display = "none";
    }
  };

  useEffect(() => {
    const logo = document.getElementById("logo");
    const darkmodeSwitch = document.querySelector(".switch");

    // Agregar el listener de clic a cada elemento
    logo.addEventListener("click", handleClickLogo);
    darkmodeSwitch.addEventListener("click", handleSwitch);
    menu.addEventListener("click", handleMenu);

    // Retirar los listeners cuando el componente se desmonte
    return () => {
      logo.removeEventListener("click", handleClickLogo);
      darkmodeSwitch.removeEventListener("click", handleSwitch);
      menu.removeEventListener("click", handleMenu);
    };
  }, []); // Solo se ejecuta una vez al montar el componente

  // const nombres = useSelector((state) => state.auth.nombres);

  return (
    <>
      <div className="menu">
        <ion-icon name="menu-outline"></ion-icon>
        <ion-icon name="close-outline"></ion-icon>
      </div>
      <div className="barra-lateral">
        <div>
          <div className="nombre-pagina">
            <ion-icon id="logo" name="american-football-outline"></ion-icon>
            <span id="pageName">PickSports</span>
          </div>
          <button className="boton">
            <ion-icon name="add-outline"></ion-icon>
            <span>Nueva</span>
          </button>
        </div>
        <nav className="navegacion">
          <ul>
            <li>
              <a href="">
                <ion-icon name="settings-outline"></ion-icon>
                <span>Config</span>
              </a>
            </li>

            <li>
              <a href="">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <span>Sent</span>
              </a>
            </li>

            <li>
              <a href="">
                <ion-icon name="settings-outline"></ion-icon>
                <span>Config</span>
              </a>
            </li>

            <li>
              <a href="">
                <ion-icon name="settings-outline"></ion-icon>
                <span>Config</span>
              </a>
            </li>

            <li>
              <a href="">
                <ion-icon name="settings-outline"></ion-icon>
                <span>Config</span>
              </a>
            </li>

            <li>
              <a href="">
                <ion-icon name="settings-outline"></ion-icon>
                <span>Config</span>
              </a>
            </li>

            <li>
              <a href="">
                <ion-icon name="settings-outline"></ion-icon>
                <span>Config</span>
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <div className="linea"></div>
          <div className="modo-oscuro">
            <div className="info">
              <ion-icon name="moon-outline"></ion-icon>
              <span>dark mode</span>
            </div>
            <div className="switch">
              <div className="base">
                <div className="circulo"></div>
              </div>
            </div>
          </div>

          <div className="usuario">
            <img src={image} alt="" />
            <div className="info-usuario">
              <div className="nombre-email">
                <span className="nombre">Alex</span>
                <span className="email">alejandro.rangel.avl@gmail.com</span>
              </div>
              <ion-icon name="ellipsis-vertical-outline"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
