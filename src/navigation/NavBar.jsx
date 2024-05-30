import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Categories from "../components/Categories";
import CartWidget from "../components/CartWidget";
import WishListWidget from "../components/WishListWidget";

const NavBar = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-md bg-light bgColorPrimary sticky-top">
        <div className="container-fluid d-flex justify-content-center">
          <Link className="navbar-brand" to="/">
            <img
              className="navbar-options-selector"
              data-value="allProducts"
              src={logo}
              alt="Logo La Tiendita"
            />
          </Link>
          <h1> Techdencia Store </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Categories />
            <div className="search-and-icons">
              <form
                className="d-flex justify-content-end mb-2 me-4"
                role="search"
              >
                <input
                  className="form-control me-2"
                  type="search"
                  aria-label="Search"
                  value={searchText}
                  onChange={handleSearchText}
                />
              </form>
              <div className="contact-info d-flex justify-content-end align-items-center pb-2">
                <span className="pe-2"> Soporte: </span>
                <div className="whatsapp pe-2">
                  <i className="bi bi-whatsapp"></i>
                </div>
                <div className="pe-2">
                  <a
                    href="https://api.whatsapp.com/send/?phone=%2B56931753580&text&type=phone_number&app_absent=0"
                    className="text-decoration-none"
                    target="blank"
                  >
                    Whatsapp
                  </a>
                </div>
                <div className="mailto pe-2">
                  <i className="bi bi-envelope-at"></i>
                </div>
                <div className="pe-2">
                  <a
                    href="mailto:joselbarrios317@gmaill.com"
                    className="text-decoration-none"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
            <div className="user-icons d-flex mb-2 me-2 align-items-center">
              <div id="user-options-container" className="dropdown">
                <button
                  className="btn bgColorSecondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="greeting-user"
                >
                  Hola Usuario
                </button>
                <ul className="dropdown-menu" id="user-options-list"></ul>
              </div>
              <div id="account-add" className="account-add">
                <a className="text-decoration-none" href="#">
                  <i
                    className="bi bi-person-add text-black"
                    title="Crear un Usuario"
                  ></i>
                </a>
              </div>
              <div id="account" className="account">
                <a className="text-decoration-none" href="#">
                  <i
                    className="bi bi-person text-black"
                    title="Iniciar Sesión"
                  ></i>
                </a>
              </div>
              <CartWidget />
              <WishListWidget />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
