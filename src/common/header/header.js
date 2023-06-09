import Image from "next/image";
import Link from "next/link";
import { Revel, userplaceholder } from "@/src/assets/img";
import { searchIcon, Bars } from "@/src/assets/img/icons";
import { useState, useRef } from "react";
import SideBar from "../sidebar/sidebar";
import { useRouter } from "next/router";
import { COMPONENT_TITLE } from "@/src/constant/titles";
import { ROUTE_URL } from "@/src/constant/url";

const Header = (props) => {
  const { title } = props;
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleDropdowm = () => {
    setIsActive(!isActive);
  };

  const toggleClick = () => {
    setShow(!show);
  };

  const searchClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="wrapper login-page">
        <nav className="navbar navbar-expand-lg brand-navbar">
          <div className="container-fluid">
            <Link className="navbar-brand" href="javascript:void(0)">
              <Image
                src={Revel}
                alt="Revel"
                className="img-fluid"
                width="115"
              />
            </Link>
            <div id="top_nav" className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto align-items-center">
                <li className="nav-item mr-3">
                  <Link
                    className="nav-link d-flex align-items-center"
                    href="javascript:void(0)"
                    onClick={searchClick}
                  >
                    <input
                      type="text"
                      className={`form-control ${toggle ? "show" : ""} `}
                      placeholder="Search"
                    />
                    <div className="toggle-search">
                      <Image
                        src={searchIcon}
                        alt="Search"
                        className="img-fluid"
                      />
                    </div>
                  </Link>
                </li>

                <li className={`nav-item dropdown dropdown-slide ${
                      isActive ? "show" : ""
                    } `}>
                  <Link
                    className="nav-link nav-pill user-avatar"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    onClick={handleDropdowm}
                  >
                    <Image
                      src={userplaceholder}
                      alt="Radiant"
                      width="35"
                      className="img-fluid"
                    />
                  </Link>
                  <div
                    ref={dropdownRef}
                    className={`dropdown-menu dropdown-menu-right dropdown-menu-accout ${
                      isActive ? "show" : ""
                    }`}
                  >
                    <div className="dropdown-header pb-3">
                      <div className="media d-user">
                        <div className="media-body">
                          <h5 className="mt-0 mb-0">john smith</h5>
                          <span>john@gmail.com</span>
                        </div>
                      </div>
                    </div>
                    <Link className="dropdown-item" href="#">
                      Profile
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Change Password
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Setting
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Logout
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <nav className="navbar navbar-expand-lg brand-navbar bg-white brand-navbar breadcrumb-navbar">
          <div className="container-fluid">
            <ol className="breadcrumb bg-white mb-0 p-0 align-items-center">
              <Link
                href="javascript:void(0)"
                className="mr-10 sidebar-toggler"
                id="sidebar_toggle"
                onClick={toggleClick}
              >
                <Image src={Bars} alt="Toggle Sidebar" className="img-fluid" />
              </Link>
              <li className="breadcrumb-item">{title}</li>
              <li className="breadcrumb-item active">
                {COMPONENT_TITLE[router.pathname]}
              </li>
            </ol>
          </div>
        </nav>
        <SideBar show={show} />
      </div>
    </>
  );
};

export default Header;
