import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import getUserInfo from "../actions/getUserInfo";

function Header({ setSearch, search }) {
  function logout() {
    // localStorage.setItem("user-info", "");
    localStorage.removeItem("user-info");
    alert("شما از حساب خود خارج شدید.");
  }
  const userLogin = getUserInfo();
  return (
    <>
      <nav
        className="
        navbar navbar-toggleable-md navbar-light
        bg-white
        fixed-top
        mediumnavigation
      "
      >
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          {/* <!-- Begin Logo --> */}
          <Link className="navbar-brand float-left" to="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
          {/* <!-- End Logo --> */}
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            {/* <!-- Begin Menu --> */}
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  صفحه نخست <span className="sr-only">(current)</span>
                </Link>
              </li>
              {userLogin ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/posts/following">
                      نوشته های دوستان
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}

              {userLogin ? (
                <>
                  <NavDropdown
                    title={`${userLogin.name}`}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item>
                      <Link className="nav-link" to={`/users/${userLogin.id}`}>
                        پست های من
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                      <Link className="nav-link" to={`/new-post`}>
                        پست جدید
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link onClick={logout} className="nav-link" to="/login">
                        خروج
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  {" "}
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      ورود
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      ثبت نام
                    </Link>
                  </li>{" "}
                </>
              )}
              {userLogin && userLogin.isAdmin ? (
                <>
                  <NavDropdown title="ادمین" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <Link className="nav-link" to="/admin/posts-list">
                        نوشته ها
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                      <Link className="nav-link" to="/admin/users-list">
                        کاربرها
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                      <Link className="nav-link" to="/admin/category-list">
                        دسته بندی ها
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                ""
              )}
            </ul>
            {/* <!-- End Menu --> */}
            {/* <!-- Begin Search --> */}
            <form className="form-inline my-2 my-lg-0">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                className="form-control mr-sm-2"
                type="text"
                placeholder="جستجو"
              />
              <span className="search-icon">
                <svg
                  className="svgIcon-use"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                >
                  <path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path>
                </svg>
              </span>
            </form>
            {/* <!-- End Search --> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
