import Image from "next/image";
import Link from "next/link";
import { Revel,userplaceholder } from "@/src/assets/img";
import { searchIcon, Bars } from "@/src/assets/img/icons";
import { useState } from "react";
import SideBar from "../sidebar/sidebar";
import { useRouter } from "next/router";
import { COMPONENT_TITLE } from "@/src/constant/titles";

const Header = (props) => {
  const {title}= props;
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  const toggleClick = () => {
    setShow(!show);
  };

  const searchClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="wrapper">
        <header className="app-header">
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
                  <li className="nav-item">
                    <Link className="nav-link" href="javascript:void(0)">
                      <Image
                        src={userplaceholder}
                        alt="User Profile"
                        width="35"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
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
              <li className="breadcrumb-item active">{COMPONENT_TITLE[router.pathname]}</li>
            </ol>
          </div>
        </nav>
        <SideBar show={show}/>
      </div>
    </>
  );
};

export default Header;
