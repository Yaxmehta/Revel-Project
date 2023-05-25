import { plusIcon } from "@/src/assets/img/icons";
import { ROUTE_URL } from "@/src/constant/url";
import Image from "next/image";
import Link from "next/link";

const Role_Management = () => {
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
                      Edit role permissions, create new roles and set Link default
                      for new people in your instance
                    </p>
                  </div>
                  <div className="buttons mt-3">
                    <Link href={ROUTE_URL.ADDROLE} className="btn mr-2 btn-primary">
                      <Image src={plusIcon} alt="Add" />
                      Add Role
                    </Link>
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
                <Link href="javascript:void(0)" className="btn btn-outline-light mr-2">
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
                        <label className="custom-control-label" for="check_all">
                          &nbsp;
                        </label>
                      </div>
                    </th>
                    <th>
                      Role Name
                      <span className="text-right float-right">
                        <i className="r-icon r-icon-filter"></i>
                      </span>
                    </th>

                    <th>
                      Created
                      <span className="text-right float-right">
                        <i className="r-icon r-icon-filter"></i>
                      </span>
                    </th>
                    <th>Last Activity</th>
                    <th className="text-center">Action</th>
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
                        <label className="custom-control-label" for="1">
                          &nbsp;
                        </label>
                      </div>
                    </td>
                    <td>REVEL</td>

                    <td>Dec 10, 2022 11:10AM</td>
                    <td>Dec 10, 2022 11:10AM</td>
                    <td>
                      <div className="buttons">
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
                          id="2"
                        />
                        <label className="custom-control-label" for="2">
                          &nbsp;
                        </label>
                      </div>
                    </td>
                    <td>RYDOT</td>

                    <td>Dec 10, 2022 11:10AM</td>
                    <td>Dec 10, 2022 11:10AM</td>
                    <td>
                      <div className="buttons">
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
                          id="3"
                        />
                        <label className="custom-control-label" for="3">
                          &nbsp;
                        </label>
                      </div>
                    </td>
                    <td>Airtel</td>

                    <td>Dec 10, 2022 11:10AM</td>
                    <td>Dec 10, 2022 11:10AM</td>
                    <td>
                      <div className="buttons">
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
                          id="4"
                        />
                        <label className="custom-control-label" for="4">
                          &nbsp;
                        </label>
                      </div>
                    </td>
                    <td>GEC</td>

                    <td>Dec 10, 2022 11:10AM</td>
                    <td>Dec 10, 2022 11:10AM</td>
                    <td>
                      <div className="buttons">
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
    </>
  );
};
export default Role_Management;
