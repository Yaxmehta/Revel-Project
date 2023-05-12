import Image from "next/image";
import Link from "next/link";
import {
  homeIcon,
  dashboardIcon,
  sourceIcon,
  destinationIcon,
  pipelineIcon,
  datasetIcon,
  analyticsIcon,
  configIcon,
} from "@/src/assets/img/icons";
import { useState } from "react";

const SideBar = (props) => {
  const { show } = props;
  const [isShow, setIsShow] = useState(false);

  const handleClick=()=>{
    setIsShow(!isShow);
  }
  return (
    <>
      <aside
        className={`brand-sidebar ${show ? "sidebar-open" : ""} `}
        id="app_sidebar"
      >
        <ul className="navbar-nav sidebar-scroll">
          <li className="nav-item">
            <Link
              className="nav-link active d-flex justify-content-between align-items-center"
              href="javascript:void(0)"
            >
              <div>
                <Image src={homeIcon} alt="Home" className="img-fluid" />
                <span>Home</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6.571"
                height="12"
                viewBox="0 0 6.571 12"
              >
                <path
                  id="icons8_expand_arrow"
                  d="M14.025,12.168,9,17.192,3.976,12.168a.571.571,0,1,0-.808.808L8.6,18.4a.571.571,0,0,0,.808,0l5.429-5.429a.571.571,0,0,0-.808-.808Z"
                  transform="translate(-12 15) rotate(-90)"
                  fill="#fff"
                />
              </svg>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link d-flex justify-content-between align-items-center"
              href="javascript:void(0)"
            >
              <div>
                <Image
                  src={dashboardIcon}
                  alt="Dashboard"
                  className="img-fluid"
                />
                <span>Dashboard</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6.571"
                height="12"
                viewBox="0 0 6.571 12"
              >
                <path
                  id="icons8_expand_arrow"
                  d="M14.025,12.168,9,17.192,3.976,12.168a.571.571,0,1,0-.808.808L8.6,18.4a.571.571,0,0,0,.808,0l5.429-5.429a.571.571,0,0,0-.808-.808Z"
                  transform="translate(-12 15) rotate(-90)"
                  fill="#A3A3A3"
                />
              </svg>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link d-flex justify-content-between align-items-center"
              href="javascript:void(0)"
            >
              <div>
                <Image src={sourceIcon} alt="Source" className="img-fluid" />
                <span>Source</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6.571"
                height="12"
                viewBox="0 0 6.571 12"
              >
                <path
                  id="icons8_expand_arrow"
                  d="M14.025,12.168,9,17.192,3.976,12.168a.571.571,0,1,0-.808.808L8.6,18.4a.571.571,0,0,0,.808,0l5.429-5.429a.571.571,0,0,0-.808-.808Z"
                  transform="translate(-12 15) rotate(-90)"
                  fill="#A3A3A3"
                />
              </svg>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link d-flex justify-content-between align-items-center"
              href="javascript:void(0)"
            >
              <div>
                <Image
                  src={destinationIcon}
                  alt="Destination"
                  className="img-fluid"
                />
                <span>Destination</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6.571"
                height="12"
                viewBox="0 0 6.571 12"
              >
                <path
                  id="icons8_expand_arrow"
                  d="M14.025,12.168,9,17.192,3.976,12.168a.571.571,0,1,0-.808.808L8.6,18.4a.571.571,0,0,0,.808,0l5.429-5.429a.571.571,0,0,0-.808-.808Z"
                  transform="translate(-12 15) rotate(-90)"
                  fill="#A3A3A3"
                />
              </svg>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link d-flex justify-content-between align-items-center"
              href="javascript:void(0)"
            >
              <div>
                <Image
                  src={pipelineIcon}
                  alt="Pipelines"
                  className="img-fluid"
                />
                <span>Pipelines</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6.571"
                height="12"
                viewBox="0 0 6.571 12"
              >
                <path
                  id="icons8_expand_arrow"
                  d="M14.025,12.168,9,17.192,3.976,12.168a.571.571,0,1,0-.808.808L8.6,18.4a.571.571,0,0,0,.808,0l5.429-5.429a.571.571,0,0,0-.808-.808Z"
                  transform="translate(-12 15) rotate(-90)"
                  fill="#A3A3A3"
                />
              </svg>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link d-flex justify-content-between align-items-center"
              href="javascript:void(0)"
            >
              <div>
                <Image src={datasetIcon} alt="Dataset" className="img-fluid" />
                <span>Dataset</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6.571"
                height="12"
                viewBox="0 0 6.571 12"
              >
                <path
                  id="icons8_expand_arrow"
                  d="M14.025,12.168,9,17.192,3.976,12.168a.571.571,0,1,0-.808.808L8.6,18.4a.571.571,0,0,0,.808,0l5.429-5.429a.571.571,0,0,0-.808-.808Z"
                  transform="translate(-12 15) rotate(-90)"
                  fill="#A3A3A3"
                />
              </svg>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link d-flex justify-content-between align-items-center"
              href="javascript:void(0)"
            >
              <div>
                <Image
                  src={analyticsIcon}
                  alt="Analytics"
                  className="img-fluid"
                />
                <span>Analytics</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6.571"
                height="12"
                viewBox="0 0 6.571 12"
              >
                <path
                  id="icons8_expand_arrow"
                  d="M14.025,12.168,9,17.192,3.976,12.168a.571.571,0,1,0-.808.808L8.6,18.4a.571.571,0,0,0,.808,0l5.429-5.429a.571.571,0,0,0-.808-.808Z"
                  transform="translate(-12 15) rotate(-90)"
                  fill="#A3A3A3"
                />
              </svg>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link d-flex justify-content-between align-items-center"
              href="javascript:void(0)"
              data-toggle="collapse"
              data-target="#dropdown"
              onClick={handleClick}
            >
              <div>
                <Image
                  src={configIcon}
                  alt="Configuration"
                  className="img-fluid"
                />
                <span>Configuration</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6.571"
                height="12"
                viewBox="0 0 6.571 12"
              >
                <path
                  id="icons8_expand_arrow"
                  d="M14.025,12.168,9,17.192,3.976,12.168a.571.571,0,1,0-.808.808L8.6,18.4a.571.571,0,0,0,.808,0l5.429-5.429a.571.571,0,0,0-.808-.808Z"
                  transform="translate(-12 15) rotate(-90)"
                  fill="#A3A3A3"
                />
              </svg>
            </Link>
            <div
              id="dropdown"
              className={`collapse has-dropdown navbar-collapse ${isShow ? "show" : ""}` } 
            >
             <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" href="javascript:void(0)">
                    User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="javascript:void(0)">
                    Role
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="javascript:void(0)">
                    Tenet
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-bottom">
          <li className="nav-item">
            <Link
              href="javascript:void(0)"
              className="btn btn-primary btn-block"
            >
              <i className="fa fa-plus mr-2"></i> Add integrations
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};
export default SideBar;
