import {
  closeIcon,
  downloadIcon,
  importIcon,
  plusIcon,
} from "@/src/assets/img/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import UserForm from "./userform";
import { cancelIcon } from "@/src/assets/img/icons";

const UserList = () => {
  const [show, setShow] = useState(false);
  const ToggleClick = () => {
    setShow(!show);
  };

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
                      User
                    </h4>
                    <p
                      className="text-muted font-12"
                      style={{ marginBottom: "7px" }}
                    >
                      Invite colleagues and manage REVEL accounts
                    </p>
                  </div>
                  <div className="buttons mt-3">
                    <Link
                      href="javascript:void(0)"
                      className="btn mr-2 btn-primary"
                      data-toggle="modal"
                      data-target="#add_user"
                      onClick={ToggleClick}
                    >
                      <Image src={plusIcon} alt="Add" />
                      Add User
                    </Link>
                    <Link
                      href="javascript:void(0)"
                      className="btn mr-2 btn-outline-light"
                    >
                      <Image src={downloadIcon} alt="Download" />
                    </Link>
                    <Link
                      href="javascript:void(0)"
                      className="btn  btn-outline-light"
                    >
                      Bulk import
                      <Image src={importIcon} alt="Bulk Import" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row px-2 mt-3">
              <div className="col-12 col-md-3">
                <div className="card">
                  <div className="card-header p-3">
                    <h5 className="card-title font-16">NEW PEOPLE 7 DAYS</h5>
                  </div>
                  <div className="card-body pt-0">
                    <div className="text-primary font-36">10</div>
                    <p className="text-muted font-12 mb-0">Last week: 1</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="card">
                  <div className="card-header p-3">
                    <h5 className="card-title font-16">
                      DELETED PEOPLE 7 DAYS
                    </h5>
                  </div>
                  <div className="card-body pt-0">
                    <div className="text-primary font-36">0</div>
                    <p className="text-muted font-12 mb-0">Last week: 0</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row px-2 align-items-center">
              <div className="col-12 col-md-6">
                <p className="text-muted">Filtered to 2 people of 2</p>
              </div>
              <div className="col-12 col-md-6 text-right d-flex">
                <Link
                  href="javascript:void(0)"
                  className="btn btn-outline-light mr-2 ml-auto"
                >
                  10 COLUMNS SELECTED OF 20
                </Link>
                <Link
                  href="javascript:void(0)"
                  className="btn btn-outline-light mr-2"
                >
                  CLEAR FILTERS
                </Link>
                <div className="form-group mb-0 search-form position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search user"
                  />
                  <i className="fa fa-search"></i>
                </div>
              </div>
            </div>
            <div className="table-responsive mt-3">
              <table className="table table-light user-table">
                <thead>
                  <tr>
                    <th>
                      <div className="custom-control custom-checkbox text-muted">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="check_all"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="check_all"
                        >
                          &nbsp;
                        </label>
                      </div>
                    </th>
                    <th>
                      Name
                      <span className="text-right float-right">
                        <i className="r-icon r-icon-filter text-muted"></i>
                      </span>
                    </th>
                    <th>
                      Email
                      <span className="text-right float-right">
                        <i className="r-icon r-icon-filter text-muted"></i>
                      </span>
                    </th>
                    <th>
                      Role
                      <span className="text-right float-right">
                        <i className="r-icon r-icon-filter text-muted"></i>
                      </span>
                    </th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="custom-control custom-checkbox text-muted">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="1"
                        />
                        <label className="custom-control-label" htmlFor="1">
                          &nbsp;
                        </label>
                      </div>
                    </td>
                    <td>
                      <span className="user-name short-name bg-warning">
                        AB
                      </span>
                      <span>Amar Bhardwaj</span>
                    </td>
                    <td>amer@revel.com</td>
                    <td>
                      <span className="badge badge-muted role-badge ">
                        {" "}
                        Member
                      </span>
                    </td>
                    <td>
                      <div className="buttons">
                        <Link href="javascript:void(0)" className="text-muted">
                          <i className="r-icon r-icon-info-outline"></i>
                        </Link>
                        <Link href="javascript:void(0)" className="text-info">
                          <i className="r-icon r-icon-pencil"></i>
                        </Link>
                        <Link href="javascript:void(0)" className="text-danger">
                          <i className="r-icon r-icon-delete"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="custom-control custom-checkbox text-muted">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="1"
                        />
                        <label className="custom-control-label" htmlFor="1">
                          &nbsp;
                        </label>
                      </div>
                    </td>
                    <td>
                      <span className="user-name short-name bg-primary">
                        AB
                      </span>
                      <span>Amar Bhardwaj</span>
                    </td>
                    <td>amer@revel.com</td>
                    <td>
                      <span className="badge badge-muted role-badge ">
                        {" "}
                        Member
                      </span>
                    </td>
                    <td>
                      <div className="buttons">
                        <Link href="javascript:void(0)" className="text-muted">
                          <i className="r-icon r-icon-info-outline"></i>
                        </Link>
                        <Link href="javascript:void(0)" className="text-info">
                          <i className="r-icon r-icon-pencil"></i>
                        </Link>
                        <Link href="javascript:void(0)" className="text-danger">
                          <i className="r-icon r-icon-delete"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="custom-control custom-checkbox text-muted">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="1"
                        />
                        <label className="custom-control-label" htmlFor="1">
                          &nbsp;
                        </label>
                      </div>
                    </td>
                    <td>
                      <span className="user-name short-name bg-secondary">
                        AB
                      </span>
                      <span>Amar Bhardwaj</span>
                    </td>
                    <td>amer@revel.com</td>
                    <td>
                      <span className="badge badge-muted role-badge ">
                        {" "}
                        Member
                      </span>
                    </td>
                    <td>
                      <div className="buttons">
                        <Link href="javascript:void(0)" className="text-muted">
                          <i className="r-icon r-icon-info-outline"></i>
                        </Link>
                        <Link href="javascript:void(0)" className="text-info">
                          <i className="r-icon r-icon-pencil"></i>
                        </Link>
                        <Link href="javascript:void(0)" className="text-danger">
                          <i className="r-icon r-icon-delete"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="custom-control custom-checkbox text-muted">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="1"
                        />
                        <label className="custom-control-label" htmlFor="1">
                          &nbsp;
                        </label>
                      </div>
                    </td>
                    <td>
                      <span className="user-name short-name bg-success">
                        AB
                      </span>
                      <span>Amar Bhardwaj</span>
                    </td>
                    <td>amer@revel.com</td>
                    <td>
                      <span className="badge badge-muted role-badge ">
                        {" "}
                        Member
                      </span>
                    </td>
                    <td>
                      <div className="buttons">
                        <Link href="javascript:void(0)" className="text-muted">
                          <i className="r-icon r-icon-info-outline"></i>
                        </Link>
                        <Link href="javascript:void(0)" className="text-info">
                          <i className="r-icon r-icon-pencil"></i>
                        </Link>
                        <Link href="javascript:void(0)" className="text-danger">
                          <i className="r-icon r-icon-delete"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <Modal size="lg" show={show} onHide={ToggleClick}>
          <Modal.Header>
            <Modal.Title>Add User</Modal.Title>
            <Image
              src={closeIcon}
              alt="Back"
              class="img-fluid"
              width="15"
              style={{ filter: " grayscale(1);" }}
              onClick={ToggleClick}
            />
          </Modal.Header>
          <Modal.Body><UserForm /></Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={ToggleClick}
              className="btn btn-muted"
            >
              Close
            </Button>
            <Button variant="primary" onClick={ToggleClick}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
export default UserList;
