import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
    return (    
        <div className=" bg-success">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src={require("../design/img/logo-header.png")} alt="logo" width="50"/>
                    <a className="navbar-brand m-2" href="#">inicio</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={props.link1}>{props.boton1}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link class="nav-link" to={props.link2}>{props.boton2}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link class="nav-link" to={props.link3}>{props.boton3}</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link class="nav-link dropdown-toggle"role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {props.boton4}
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link class="dropdown-item" to={props.link41}>{props.boton41}</Link></li>
                                        <li><Link class="dropdown-item" to={props.link42}>{props.boton42}</Link></li>
                                        <li><Link class="dropdown-item" to={props.link43}>{props.boton43}</Link></li>
                                    </ul>                     
                                </li>
                            </ul>
                        </div>
                        </div>
                    </nav>
                </div>

)}
export default Header