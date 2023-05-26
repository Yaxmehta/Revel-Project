import Header from "@/src/common/header/header";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "../../assets/img";
import { quotoneIcon, rydotIcon } from "../../assets/img/icons";
import { useState } from "react";
import { ROUTE_URL } from "@/src/constant/url";
const ManageTenants = () => {
  const [visible, setVisible] = useState(7);
  const showmoreitem = () => {
    setVisible((predata) => predata + 8);
  };
  const data = [
    {
      id: 1,
      name: "Revel",
      img: Logo,
    },
    {
      id: 2,
      name: "Quotone",
      img: quotoneIcon,
    },
    {
      id: 3,
      name: "Rydot",
      img: rydotIcon,
    },
    {
      id: 4,
      name: "Revel",
      img: Logo,
    },
    {
      id: 5,
      name: "Quotone",
      img: quotoneIcon,
    },
    {
      id: 6,
      name: "Rydot",
      img: rydotIcon,
    },
    {
      id: 7,
      name: "Revel",
      img: Logo,
    },
    {
      id: 8,
      name: "Quotone",
      img: quotoneIcon,
    },
    {
      id: 9,
      name: "Rydot",
      img: rydotIcon,
    },
    {
      id: 10,
      name: "Revel",
      img: Logo,
    },
    {
      id: 11,
      name: "Quotone",
      img: quotoneIcon,
    },
    {
      id: 12,
      name: "Rydot",
      img: rydotIcon,
    },
    {
      id: 13,
      name: "Revel",
      img: Logo,
    },
    {
      id: 14,
      name: "Quotone",
      img: quotoneIcon,
    },
    {
      id: 15,
      name: "Rydot",
      img: rydotIcon,
    },
    {
      id: 16,
      name: "Revel",
      img: Logo,
    },
    {
      id: 17,
      name: "Quotone",
      img: quotoneIcon,
    },
    {
      id: 18,
      name: "Rydot",
      img: rydotIcon,
    },
  ];

  return (
    <>
    <div className="wrapper login-page">
      <main class="main-content" id="main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="login-form  p-0 mt-5">
                <div className="col-9 mx-auto ">
                  <div className="text-center mb-5">
                    <h3 className="font-36 mb-2">Manage the Tenants</h3>
                    <p className="font-16 ">
                      You can add, edit and delete Tenant anytime.
                    </p>
                  </div>
                  <div className="row data-lake-cards tenants">
                    {data.slice(0, visible).map((el) => {
                      return (
                        <>
                          <div className="col-12 col-md-3 mb-4">
                            <div className="card text text-center mb-0">
                              <Link href={ROUTE_URL.DASHBOARD}>
                              <div className="icon">
                                <Image
                                  src={el.img}
                                  alt="Revel"
                                  className="img-fluid mx-auto"
                                  width="140"
                                />
                              </div>
                              </Link>
                              {el.name}
                              <div className="actions">
                                <ul className="list-unstyled d-flex flex-row mb-0 justify-content-center">
                                  <li>
                                    <Link href={ROUTE_URL.DASHBOARD}>
                                      <i className="r-icon r-icon-info-outline"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="javascript:void(0)">
                                      <i className="r-icon r-icon-pencil"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="javascript:void(0)"
                                      className="text-danger"
                                    >
                                      <i className="r-icon r-icon-delete"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}

                    <div className="col-12 col-md-3">
                      <Link href={ROUTE_URL.ADDTENANT}>
                        <label htmlFor="logo" className="upload-box card">
                          <div className="inner-content">
                            <div className="icon-box">
                              <i className="r-icon r-icon-plus"></i>
                            </div>
                            Add Tenant
                          </div>
                        </label>
                      </Link>
                    </div>
                  </div>
                  <div className="text-center my-4 ">
                    <div className="d-flex justify-content-center my-3">
                      <button
                        className="btn btn-success btn-lg min-width-150"
                        onClick={showmoreitem}
                      >
                        Load More
                      </button>
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
export default ManageTenants;
