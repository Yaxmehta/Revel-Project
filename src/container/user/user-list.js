import {
  closeIcon,
  downloadIcon,
  importIcon,
  plusIcon,
} from "@/src/assets/img/icons";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import { Pagination } from "react-bootstrap";
import UserForm from "./userform";
import userdata from "@/public/users.json";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const UserList = () => {
  const [show, setShow] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [filteredUsers, setFilteredUsers] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");


  // const handlePagination = (page) => {
  //   setCurrentPage(page);
  // };


  // const handleSearch = (event) => {
  //   const term = event.target.value;
  //   setSearchTerm(term);

  //   const filteredData = userdata[0].data.filter((user) =>
  //     user.name.toLowerCase().includes(term.toLowerCase())
  //   );
  //   setFilteredUsers(filteredData);
  //   setCurrentPage(1);

  //   const message = filteredUsers ? `${filteredData.length} record (s) found` : 'No record match found';
  //   const toastId = "record message";
  //   toast.success(message, { toastId })
  // };

  const ToggleClick = () => {
    setShow(!show);
  };


  // const itemsPerPage = 10;
  // const users = searchTerm ? filteredUsers : userdata[0].data;
  // const totalUsers = users.length;
  // const totalPages = Math.ceil(totalUsers / itemsPerPage);
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const paginatedUsers = users.slice(startIndex, endIndex);
  // const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);

  // function handlePreviousPage() {
  //   if (currentPage !== 1) {
  //     setCurrentPage(currentPage - 1);
  //   }

  // }

  // function handleNextPage() {
  //   if (currentPage !== totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }

  // }

  // const handleDelete = (id) => {
  //   const index = userdata[0].data.findIndex((record) => record.id === id);
  //   if (index !== -1) {
  //     const deletedRecord = userdata[0].data[index];
  //     userdata[0].data.splice(index, 1);
  //     setFilteredUsers(deletedRecord)
  //   }
  //   const toastId = "delete message";
  //   toast.error("user deleted successfully", { toastId });
  //   return null;

  // };

  const [users, setUsers] = useState([]);
  // const [totalPages, setTotalPages] = useState(0);

  // const fetchUsers = async (page = 1) => {
  //   let token = "";
  //   if (typeof window !== "undefined") {
  //     token = JSON.parse(localStorage.getItem("token"));
  //   }
  //   try {
  //     const response = await axios.get('http://master.revel-dev.test:9876/user/v1/getAll', {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": `bearer ${token}`,
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Methods": ["GET", "POST", "PUT", "DELETE"]

  //       }
  //     });


  //     setUsers(response.data.data);
  //     console.log(response.data)
  //     setCurrentPage(response.currentPage);
  //     setTotalPages(response.totalPages);
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //   }
  // };

  // const handleSearch = (event) => {
  
  //   setSearchTerm(event.target.value);

  //   fetchUsers();
  // };



  // const handlePagination = (page) => {
  //   fetchUsers(page);
  // };

  const fetchUsers = async () => {
    let token = "";

    const storedToken = localStorage.getItem("token");
    if (storedToken !== 'undefined') {
      token = JSON.parse(storedToken);
    }

    try {
      const response = await axios.get("http://master.revel-dev.test:9876/user/v1/getAll", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": ["GET", "POST", "PUT", "DELETE"]

        }
      });
      setUsers(response.data.data);
    } catch (error) {
      console.log('Error fetching users:', error);
    }
  };



  useEffect(() => {
    

    fetchUsers();
  }, []);

  const deleteUserRecord = (id) => {
    const url = "http://master.revel-dev.test:9876/user/v1/delete";
    const params = { id: id }

    CustomDelete(url, params);
  }

  return (
    <>
      <div className="wrapper app-header">
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
                      href="#"
                      className="btn mr-2 btn-primary"
                      data-toggle="modal"
                      data-target="#add_user"
                      onClick={ToggleClick}
                    >
                      <Image src={plusIcon} alt="Add" />
                      Add User
                    </Link>
                    <Link
                      href="#"
                      className="btn mr-2 btn-outline-light"
                    >
                      <Image src={downloadIcon} alt="Download" />
                    </Link>
                    <Link
                      href="#"
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
                {/* <p className="text-muted">Filtered to 2 people of 2</p> */}
              </div>
              <div className="col-12 col-md-6 text-right d-flex">
                <Link
                  href="#"
                  className="btn btn-outline-light mr-2 ml-auto"
                >
                  10 COLUMNS SELECTED OF 20
                </Link>
                <Link
                  href="#"
                  className="btn btn-outline-light mr-2"
                >
                  CLEAR FILTERS
                </Link>
                <div className="form-group mb-0 search-form position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search user"
                  // value={searchTerm}
                  // onChange={handleSearch}
                  />
                  <i className="fa fa-search"></i>
                </div>
              </div>
            </div>

            <div className="table-responsive mt-3">
              <Table className="table table-light user-table" hover>
                <thead>
                  <tr>
                    <th>
                      <div className="custom-control custom-checkbox text-muted">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="check_all"
                        />
                        <label className="custom-control-label" htmlFor="check_all">
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
                {users.map((user) => {
                  return (
                    <>
                      <tbody>
                        <tr key={user.id}>
                          <td>
                            <div className="custom-control custom-checkbox text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id={user.id}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="1"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.roleId}</td>
                          <td>
                            <div className="buttons">
                              <Link
                                href="#"
                                className="text-muted"
                              >
                                <i className="r-icon r-icon-info-outline"></i>
                              </Link>
                              <Link
                                href="#"
                                className="text-info"
                              >
                                <i className="r-icon r-icon-pencil"></i>
                              </Link>
                              <Link
                                href="#"
                                className="text-danger"
                                onClick={() => deleteUserRecord(user.id)}
                              >

                                <i className="r-icon r-icon-delete" ></i>
                              </Link>

                            </div>

                          </td>
                        </tr>
                      </tbody>
                    </>
                  );
                })}
              </Table>
            </div>
            {/* ------------------------- Pagination START ----------------------------------  */}
            {/* {totalPages > 1 && (
        <div>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePagination(page)}
              disabled={page === currentPage}
            >
              {page}
            </button>
          ))}
        </div>
      )} */}
            {/* ---------------------- Pagination END ---------------------------------------- */}

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
            {/* <CloseButton aria-label="Hide" onClick={ToggleClick} variant="white"/> */}
          </Modal.Header>
          <Modal.Body>
            <UserForm />
          </Modal.Body>
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
