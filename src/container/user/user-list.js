import { closeIcon, downloadIcon, importIcon, plusIcon } from "@/src/assets/img/icons";
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
      </div>

      {/* -------------------------------------------------------- */}

      <Modal size="lg" show={show} onHide={ToggleClick}>
        <Modal.Header >
          <Modal.Title>Add User</Modal.Title>
          <Image src={closeIcon} alt="Back" class="img-fluid" width="15" style={{ filter: " grayscale(1);" }} onClick={ToggleClick}/>
        </Modal.Header>
        <Modal.Body>
          <UserForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ToggleClick} className="btn btn-muted">
            Close
          </Button>
          <Button variant="primary" onClick={ToggleClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* ------------------------------------------------------------------------- */}
      {/* <div
        id="add_user"
        className={`${show ? "modal fade":"show"}`}
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title">Add User</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={ToggleClick}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.422"
                    height="20.422"
                    viewBox="0 0 20.422 20.422"
                  >
                    <path
                      id="icons8_close"
                      d="M5.265,3.99a1.274,1.274,0,0,0-.889,2.188L12.4,14.2,4.376,22.217a1.274,1.274,0,1,0,1.8,1.8L14.2,16l8.019,8.019a1.274,1.274,0,1,0,1.8-1.8L16,14.2l8.019-8.019a1.274,1.274,0,1,0-1.8-1.8L14.2,12.4,6.178,4.376A1.274,1.274,0,0,0,5.265,3.99Z"
                      transform="translate(-3.99 -3.99)"
                      fill="#a3a3a3"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="col-10 mx-auto">
                <div className="login-form p-0 row">
                  <div className="mb-3 col-md-6">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Email "
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Role
                    </label>
                    <select name="country" id="region" className="form-control">
                      <option value="Default region name:">Setect Role</option>
                      <option value="India">Admin</option>
                      <option value="U.S.">User</option>
                    </select>
                  </div>
                  <div className="mb-3 col-md-6">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="City "
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="State "
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Zip Code
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Zip Code "
                    />
                  </div>

                  <div className="mb-3 col-md-6">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Address Line 1
                    </label>
                    <textarea
                      className=" form-control"
                      id="textarea"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="mb-3 col-md-6">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Address Line 2
                    </label>
                    <textarea
                      className=" form-control"
                      id="textarea"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              <div className="text-center my-2">
                <Link
                  href="javascript:void(0)"
                  className="btn btn-muted mr-2"
                  data-dismiss="modal"
                  onClick={ToggleClick}
                >
                  Cancel
                </Link>
                <Link
                  href="javascript:void(0)"
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Save
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default UserList;
