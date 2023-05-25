import { ROUTE_URL } from "@/src/constant/url";
import Link from "next/link";
import { useState } from "react";
import { Collapse } from "react-bootstrap";

const Add_Role = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="wrapper">
        <main className="main-content" id="main">
          <div className="container-fluid">
            <div className="row px-2">
              <div className="col-12">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h4 className="page-title font-20 text-dark mb-1 mt-3">
                      Role Management
                    </h4>
                    <p className="text-muted font-12">
                      Edit role permissions, create new roles and set a default
                      htmlFor new people in your instance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-htmlForm p-0">
              <div className="row px-2">
                <div className="col-12 col-md-3">
                  <div className="mb-2"> Role Name</div>
                  <div className="htmlForm-group label-inside">
                    <input
                      type="text"
                      className="htmlForm-control"
                      id="role_name"
                    />
                  </div>
                </div>

                <div className="col-12 col-md-3">
                  <label className="d-block" style={{ height: "0px" }}>
                    &nbsp;
                  </label>
                  <div className="custom-control custom-switch mt-status">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="conntect_http"
                    />
                    <label
                      className="custom-control-label d-inline-block mb-1"
                      htmlFor="conntect_http"
                    >
                      Status
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row px-2">
              <div className="col-12">
                <div className="d-grid column-8">
                  <div>&nbsp;</div>
                  <div>Add</div>
                  <div>Edit</div>
                  <div>View</div>
                  <div>Delete</div>
                  <div>Import</div>
                  <div>Export</div>
                  <div>Run</div>
                </div>
                <div className="accordions" id="accordion">
                  <div className="collapse-item">
                    <div
                      className="collapse-header"
                      onClick={() => setOpen(!open)}
                      aria-controls="media"
                      aria-expanded={open}
                    >
                      <i className="fa fa-chevron-down mr-2"></i>
                      Media
                    </div>
                    <Collapse in={open}>
                      <div id="media">
                        <div className="d-grid column-8">
                          <div>User Media</div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="1"
                                checked
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="1"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="2"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="2"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="3"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="3"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="4"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="4"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="5"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="5"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="6"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="6"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="7"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="7"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="d-grid column-8">
                          <div>User Media</div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="1"
                                checked
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="1"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="2"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="2"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="3"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="3"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="4"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="4"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="5"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="5"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="6"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="6"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="7"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="7"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Collapse>
                  </div>

                  <div className="collapse-item">
                    <div
                      className="collapse-header"
                      onClick={() => setIsOpen(!isOpen)}
                      aria-controls="dashboard"
                      aria-expanded={isOpen}
                    >
                      <i className="fa fa-chevron-down mr-2"></i>
                      My Dashboard
                    </div>
                    <Collapse in={isOpen}>
                      <div id="dashboard">
                        <div className="d-grid column-8">
                          <div>Dashboard</div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="1"
                                checked
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="1"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="2"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="2"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="3"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="3"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="4"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="4"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="5"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="5"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="6"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="6"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="7"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="7"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Collapse>
                  </div>
                  <div className="collapse-item">
                    <div
                      className="collapse-header"
                      onClick={() => setShow(!show)}
                      aria-controls="powerbi"
                      aria-expanded={show}
                    >
                      <i className="fa fa-chevron-down mr-2"></i>
                      Power BI
                    </div>
                    <Collapse in={show}>
                      <div id="powerbi">
                        <div className="d-grid column-8">
                          <div>Power BI</div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="1"
                                checked
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="1"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="2"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="2"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="3"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="3"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="4"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="4"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="5"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="5"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="6"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="6"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="7"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="7"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Collapse>
                  </div>
                </div>
              </div>
            </div>
            <div className="row px-2">
              <div className="col-12">
                <div className="d-flex justify-content-center my-3">
                  <Link
                    href="javascript:void(0)"
                    className="btn-lg btn btn-muted btn-default mr-2 min-width-150"
                  >
                    CANCEL
                  </Link>
                  <Link
                    href={ROUTE_URL.ROLEMANAGEMENT}
                    className="btn-lg btn  btn-primary min-width-150"
                  >
                    SAVE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Add_Role;
