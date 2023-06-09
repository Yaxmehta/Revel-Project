import {
  CSV_FileIcon,
  Mongo_Icon,
  MY_SQLIcon,
  plusIcon,
} from "@/src/assets/img/icons";
import { ROUTE_URL } from "@/src/constant/url";
import Image from "next/image";
import Link from "next/link";


const Source = () => {
  return (
    <>
      <div className="wrapper app-header">
        <main className="main-content" id="main">
          <div className="container-fluid">
            <div className="row px-2">
              <div className="col-12 pr-2">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h4 className="page-title font-20 text-dark mb-1 mt-3">
                      Source Management
                    </h4>
                    <p className="text-muted font-12">
                      Move data between any Source and Destination
                    </p>
                  </div>
                  <div className="buttons mt-3">
                    <Link
                      href={ROUTE_URL.ADDSOURCE}
                      className="btn mr-2 btn-primary"
                    >
                      <Image src={plusIcon} alt="Add" />
                      Add Source
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row px-2 align-items-center">
              <div className="col-12 col-md-6">
                {/* <p className="text-muted">03 Source found</p> */}
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
                    placeholder="Search..."
                  />
                  <i className="fa fa-search"></i>
                </div>
              </div>
            </div>
            <div className="px-2 row mt-3 source-card-grid">
              <div className="col-md-4">
                <div className="card source-card">
                  <div className="row align-items-center mx-0">
                    <div className="col-12 col-md-6 px-0">
                      <div className="d-flex align-items-center">
                        <Link
                          href="#"
                          className="text-muted icon-box"
                        >
                          <i className="r-icon-arrow-up2"></i>
                        </Link>
                        <div className="d-flex align-items-center">
                          <div
                            className="icon-wrapper"
                            style={{ background: "#D3F3E3" }}
                          >
                            <Image src={CSV_FileIcon} alt="CSV Download" />
                          </div>
                          <div>
                            <p className="mb-0">CSV Source</p>
                            <small className="text-muted">Rydot - CSV</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 px-0 text-right">
                      <div className="ml-auto">
                        <span className="mr-3 d-inline-block">
                          <span className="badge badge-muted min-90 role-badge text-center">
                            DRAFT
                          </span>
                          <Link href="#" className="text-danger">
                            <i className="r-icon r-icon-delete  ml-2"></i>
                          </Link>
                        </span>
                        <Link href="#" className="text-muted">
                          <i className="r-icon-chevron-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 text-right">
                      <span className="min-90 active-btn btn font-12 text-center">
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card source-card">
                  <div className="row align-items-center mx-0">
                    <div className="col-12 col-md-6 px-0">
                      <div className="d-flex align-items-center">
                        <Link
                          href="#"
                          className="text-muted icon-box"
                        >
                          <i className="r-icon-arrow-up2"></i>
                        </Link>
                        <div className="d-flex align-items-center">
                          <div
                            className="icon-wrapper"
                            style={{ background: "#FCEEB8" }}
                          >
                            <Image src={MY_SQLIcon} alt="MySQL" />
                          </div>
                          <div>
                            <p className="mb-0">MySQL Source</p>
                            <small className="text-muted">Rydot - MySQL</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 px-0 text-right">
                      <div className="ml-auto">
                        <span className="mr-3 d-inline-block">
                          <span className="badge badge-muted min-90 role-badge text-center">
                            DRAFT
                          </span>
                          <Link href="#" className="text-danger">
                            <i className="r-icon r-icon-delete  ml-2"></i>
                          </Link>
                        </span>
                        <Link href="#" className="text-muted">
                          <i className="r-icon-chevron-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 text-right">
                      <span className="min-90 active-btn btn font-12 text-center">
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card source-card">
                  <div className="row align-items-center mx-0">
                    <div className="col-12 col-md-6 px-0">
                      <div className="d-flex align-items-center">
                        <Link
                          href="#"
                          className="text-muted icon-box"
                        >
                          <i className="r-icon-arrow-up2"></i>
                        </Link>
                        <div className="d-flex align-items-center">
                          <div
                            className="icon-wrapper"
                            style={{ background: "#B7E5CA" }}
                          >
                            <Image src={Mongo_Icon} alt="MongoDB" />
                          </div>
                          <div>
                            <p className="mb-0">Mongodb Source</p>
                            <small className="text-muted">
                              Rydot - Mongodb
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 px-0 text-right">
                      <div className="ml-auto">
                        <span className="mr-3 d-inline-block">
                          <span className="badge badge-muted min-90 role-badge text-center">
                            DRAFT
                          </span>
                          <Link href="#" className="text-danger">
                            <i className="r-icon r-icon-delete  ml-2"></i>
                          </Link>
                        </span>
                        <Link href="#" className="text-muted">
                          <i className="r-icon-chevron-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 text-right">
                      <span className="min-90 active-btn btn font-12 text-center">
                        ACTIVE
                      </span>
                    </div>
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
export default Source;
