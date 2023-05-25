import { cancelIcon, BackArrowIcon, MongoDB_Icon } from "@/src/assets/img/icons";
import { ROUTE_URL } from "@/src/constant/url";
import Link from "next/link";
import Image from "next/image";
const Mongodb = () => {
  return (
    <>
      <div className="wrapper login-page">
        <nav className="navbar navbar-expand-lg brand-navbar bg-white brand-navbar breadcrumb-navbar top-0">
          <div className="container-fluid">
            <ol className="breadcrumb bg-white mb-0 p-0 align-items-center">
              <Link
                href={ROUTE_URL.ADDSOURCE}
                className="mr-10 sidebar-toggler"
                id=""
              >
                <Image
                  src={BackArrowIcon}
                  alt="Back"
                  className="img-fluid"
                  width="8"
                />
              </Link>
            </ol>
            <ol className="breadcrumb bg-white mb-0 p-0 align-items-center ml-auto">
              <Link href={ROUTE_URL.ADDSOURCE} className="sidebar-toggler" id="">
                <Image
                  src={cancelIcon}
                  alt="Back"
                  className="img-fluid"
                  width="15"
                  style={{ filter: "grayscale(1)" }}
                />
              </Link>
            </ol>
          </div>
        </nav>
        <main className="main-content mt-60 login-form p-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-7 border-right">
                <div className="text-center  py-5 position-relative">
                  <Image
                    src={MongoDB_Icon}
                    alt="MongoDB"
                    className="img-fluid position-absolute page-logo"
                  />
                  <h3 className="font-24 mb-3">Configure your MongoDB Data Lake</h3>
                  <p>Follow the guide on the right to set up your Data Lake</p>
                </div>
                <a
                  href="javascript:void(0)"
                  className="text-muted mb-3 d-flex justify-content-end align-items-center"
                >
                  Draft Saved <i className="fa fa-share ml-2"></i>
                </a>
                <div className="alert alert-outline-primary text-left">
                  <i className="r-icon r-icon-info text-primary"></i> There are
                  Prerequisites that you must ensure to set up this Source for
                  your Pipeline
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group label-inside label-left">
                      <input
                        type="text"
                        className="form-control p-10-15"
                        id="pipeline"
                      />
                      <label htmlFor="pipeline">Pipeline Name</label>
                      <small className="mt-1 d-inline-block text-grey font-10">
                        A unique name for your Pipeline
                      </small>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header pt-3 pb-0">
                    <h4 className="card-title">
                      <span className="ml-0">General Connection Settings</span>
                    </h4>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          id="paste"
                          name="secure"
                          className="custom-control-input"
                        />
                        <label className="custom-control-label" htmlFor="paste">
                          Paste Connection String
                        </label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          id="connection"
                          name="secure"
                          className="custom-control-input"
                        />
                        <label className="custom-control-label" htmlFor="connection">
                          Enter Connection Fields Manually
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="form-group label-inside label-left">
                          <input
                            type="text"
                            className="form-control p-10-15"
                            id="db_host"
                          />
                          <label htmlFor="db_host"> Database Host </label>
                          <small className="mt-1 d-inline-block text-grey font-10">
                            A comma-separated list of IP addresses or hostnames
                            of the databases you want to access.
                          </small>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group label-inside label-left">
                          <input
                            type="text"
                            className="form-control p-10-15"
                            id="db_port"
                          />
                          <label htmlFor="db_port"> Database Port </label>
                          <small className="mt-1 d-inline-block text-grey font-10">
                            The port on which the database is accepting
                            connections
                          </small>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group label-inside label-left">
                          <input
                            type="text"
                            className="form-control p-10-15"
                            id="db_user"
                          />
                          <label htmlFor="db_user"> Database User </label>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group label-inside label-left">
                          <input
                            type="text"
                            className="form-control p-10-15"
                            id="db_password"
                          />
                          <label htmlFor="db_password"> Database Password </label>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group label-inside label-left">
                          <input
                            type="text"
                            className="form-control p-10-15"
                            id="db_name"
                          />
                          <label htmlFor="db_name">
                            {" "}
                            Authentication Database Name{" "}
                          </label>
                          <small className="mt-1 d-inline-block text-grey font-10">
                            The authentication database associated with the
                            database user.
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-control custom-switch ml-3 mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="ssl"
                  />
                  <label
                    className="custom-control-label d-inline-block mb-1"
                    htmlFor="ssl"
                  >
                    Use SSL
                  </label>
                  <div className="text-grey font-10">
                    Connect over an SSL-encrypted connection
                  </div>
                </div>
                <p className="font-weight-500">Select an Ingestion Mode</p>
                <div className="card">
                  <div className="card-body">
                    <div className="switch-wrapper">
                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          id="opt_log"
                          name="secure"
                          className="custom-control-input"
                        />
                        <label className="custom-control-label" htmlFor="opt_log">
                          OpLog
                          <span className="badge badge-primary ml-2">
                            {" "}
                            Recommended{" "}
                          </span>
                          <div className="text-grey font-10 mt-2">
                            Data is ingested through Change Data Capture (CDC)
                            performed using the MongoDB OpLog.
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="switch-wrapper">
                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          id="stream"
                          name="secure"
                          className="custom-control-input"
                        />
                        <label className="custom-control-label" htmlFor="stream">
                          Change Streams
                          <div className="text-grey font-10 mt-2">
                            Data is ingested through Change Data Capture (CDC)
                            performed using Change Streams introduced in MongoDB
                            version 4.0. Change Streams work like the OpLog,
                            while offering better performance.
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  Please open access to the undefined port from Hevo's IP
                  address{" "}
                  <span className="badge badge-danger"> 13.235.131.126</span>
                </p>
                <div className="custom-control custom-switch ml-3 mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="conntect_http"
                  />
                  <label
                    className="custom-control-label d-inline-block mb-1"
                    htmlFor="conntect_http"
                  >
                    Connect Through SSH
                  </label>
                  <div className="text-grey font-10">
                    If enabled, it indicates that the database uses a secure TLS
                    connection and can only be accessed using HTTPS protocol.
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9.018"
                        height="13.116"
                        viewBox="0 0 9.018 13.116"
                      >
                        <path
                          id="icons8_sort_down"
                          d="M20.5,13H8.615a.615.615,0,0,0-.489.988l5.943,7.788a.615.615,0,0,0,.978,0l5.943-7.788A.615.615,0,0,0,20.5,13Z"
                          transform="translate(-13 21.116) rotate(-90)"
                          fill="#5B5B5B"
                        />
                      </svg>
                      <span>Advanced Settings</span>
                    </h4>
                  </div>
                  <div className="card-body">
                    <div className="custom-control custom-switch ml-3 mb-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="load_data"
                      />
                      <label
                        className="custom-control-label d-inline-block mb-1"
                        htmlFor="load_data"
                      >
                        Load Historical Data
                      </label>
                      <div className="text-grey font-10">
                        If disabled, REVEL loads only the data that is written
                        to your database after the time of creation of the
                        Pipeline.
                      </div>
                    </div>
                    <div className="custom-control custom-switch ml-3 mb-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="new_pipeline"
                      />
                      <label
                        className="custom-control-label d-inline-block mb-1"
                        htmlFor="new_pipeline"
                      >
                        Include New Tables in the Pipeline
                      </label>
                      <div className="text-grey font-10">
                        If enabled, Hevo automatically ingests from any tables
                        created or restored after the Pipeline is created.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center my-3">
                  <a
                    href="javascript:void(0)"
                    className="btn-lg btn btn-muted btn-default mr-2"
                  >
                    TEST CONNECTION
                  </a>
                  <a href={ROUTE_URL.SOURCE} className="btn-lg btn  btn-primary">
                    TEST & CONTINUE
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-5">
                <div className="py-5">
                  <h3 className="font-24 mb-3">Prerequisites</h3>
                  <p>
                    <span className="text-primary">
                      Replication is set up for MongoDB OpLog and Change
                      Streams.
                    </span>{" "}
                    <br />
                    REVEL has{" "}
                    <span className="text-primary">
                      permissions to read the Generic MongoDB databases. Hevo’s
                      IP addresses are whitelisted.
                    </span>
                  </p>
                  <hr />
                  <p className="mb-3">
                    Perform the following steps to configure your Elasticsearch
                    Source:
                  </p>
                  <div className="step">
                    <div>
                      <span className="badge badge-primary step-badge">Step 1</span>
                      <label htmlFor="">
                        Set up MongoDB Replication for OpLog and Change Streams
                      </label>
                    </div>
                    <p>
                      Note: REVEL supports data ingestion from MongoDB via OpLog
                      and Change Streams. Change Streams internally use OpLog
                      for replication.
                    </p>
                    <p>
                      To set up replication for OpLog or Change Streams, perform
                      the following steps:
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        Modify the MongoDB server configuration: MongoDB
                        configuration file,{" "}
                        <span className="text-warning"> mongod.conf</span>, is
                        generally found in{" "}
                        <span className="text-warning">/etc/ </span> directory in a
                        Linux system. The options to configure are as follow.
                        <p className="mt-3">
                          <span className="text-primary">
                            replication.replSetName:
                          </span>{" "}
                          The replica set this MongoDB is part of. <br />
                          <br />
                          <span className="text-primary">
                            replication.oplogSizeMB:
                          </span>
                          The max size of logs that mongo will persist keep{" "}
                          <br />
                          this enough high we recommend 2048 MB (2GB). <br />
                          <br />
                          <span className="text-primary">net.bindIp:</span>
                          The IP this MongoDB server should listen to.
                        </p>
                        <p>An example config will look like as follows:</p>
                      </li>
                    </ul>
                  </div>
                  <div className="step">
                    <div>
                      <span className="badge badge-primary step-badge">Step 2</span>
                      <label htmlFor="">
                        Set up Permissions to Read Generic <br />
                        MongoDB Databases
                      </label>
                    </div>
                  </div>
                  <div className="step">
                    <div>
                      <span className="badge badge-primary step-badge">Step 3</span>
                      <label htmlFor="">Whitelist Hevo’s IP Addresses</label>
                    </div>
                    <p>
                      In order to allow Hevo to access your MongoDB databases,
                      you must whitelist{" "}
                      <span className="text-primary">REVEL IP addresses.</span>{" "}
                      <br />
                      <br />
                      To do this, add the IP addresses to the list of
                      authenticated IP Addresses/CIDR of your MongoDB instance
                      by{" "}
                      <span className="text-primary">
                        {" "}
                        following these simple steps.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Mongodb;
