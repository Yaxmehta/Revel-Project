import {
  CSV_FileIcon,
  MongoDB_Icon,
  MY_SQLIcon,
  SAP_Icon,
} from "@/src/assets/img/icons";
import { ROUTE_URL } from "@/src/constant/url";
import Image from "next/image";
import Link from "next/link";

const AddSource = () => {
  return (
    <>
      <div className="wrapper">
        <ul className="nav nav-tabs stepper justify-content-center top-120">
          <li className="nav-item">
            <Link className="nav-link active" href="javascript:void(0)">
              <span className="number">1</span>
              <span>Select Source</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="javascript:void(0)">
              <span class="number">2</span>
              <span>Configure Source Settings</span>
            </Link>
          </li>
          <div className="process-bar" style={{width: "40%"}}></div>
        </ul>
        <main className="main-content" id="main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="login-form p-0 mt-5">
                  <div className="col-9 mx-auto">
                    <div className="text-center mb-4">
                      <h3 className="font-36 mb-4">Select Source Type</h3>
                      <p className="font-16">
                        Select the Source you want to bring data from
                      </p>
                    </div>
                    <div className="row data-lake-cards">
                      <div className="col-12 col-md-3">
                        <Link
                          href="javascript:void(0)"
                          className="card text text-center mb-0 d-flex justify-content-center"
                        >
                          <div className="icon">
                            <Image
                              src={CSV_FileIcon}
                              alt="CSV"
                              width="80"
                              className="img-fluid mx-auto"
                            />
                          </div>
                          <span>CSV</span>
                        </Link>
                      </div>
                      <div className="col-12 col-md-3">
                        <Link
                          href={ROUTE_URL.MONGODB}
                          className="card text text-center mb-0 d-flex justify-content-center"
                        >
                          <div className="icon">
                            <Image
                              src={MongoDB_Icon}
                              alt="MongoDB"
                              width="80"
                              className="img-fluid mx-auto"
                            />
                          </div>
                          <span>MongoDB</span>
                        </Link>
                      </div>
                      <div className="col-12 col-md-3">
                        <Link
                          href="javascript:void(0)"
                          className="card text text-center mb-0 d-flex justify-content-center"
                        >
                          <div className="icon">
                            <Image
                              src={MY_SQLIcon}
                              alt="MySQL"
                              width="145"
                              className="img-fluid mx-auto"
                            />
                          </div>
                          <span>MySQL</span>
                        </Link>
                      </div>
                      <div className="col-12 col-md-3">
                        <Link
                          href="javascript:void(0)"
                          className="card text text-center mb-0 d-flex justify-content-center"
                        >
                          <div className="icon">
                            <Image
                              src={SAP_Icon}
                              alt="SAP"
                              width="160"
                              className="img-fluid mx-auto"
                            />
                          </div>
                          <span>SAP</span>
                        </Link>
                      </div>
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
export default AddSource;
