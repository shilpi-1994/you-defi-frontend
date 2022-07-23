import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <div>
      <div>
        <nav
          className="navbar navbar-expand-sm bg-dark navbar-dark"
          style={{ justifyContent: "space-around" }}
        >
          <a className="navbar-brand" href="#">
            Ledger
          </a>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Your supply
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Your borrows
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >
                More
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Link 1
                </a>
                <a className="dropdown-item" href="#">
                  Link 2
                </a>
                <a className="dropdown-item" href="#">
                  Link 3
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
