import Header from "@/src/common/header/header";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "../../assets/img";
import { quotoneIcon, rydotIcon } from "../../assets/img/icons";
import { useState,useEffect } from "react";
import { ROUTE_URL } from "@/src/constant/url";
import axios from "axios";
import readdata from "@/public/alltenants.json";


const ManageTenants = () => {
  // const[tenantData,setTenantData]= useState('');
  const [visible, setVisible] = useState(3);
  const showmoreitem = () => {
    setVisible((predata) => predata + 8);
  };


//  const getAllTenants=async()=>{
//   const tenants= await axios.get("http://master.revel-dev.test:8001/role/v1/getAll");
//   setTenantData(tenants.data)
//   console.log(tenants.data)
// }
// useEffect(()=>{
//   getAllTenants();
// },[]);

  return (
    <>
    <div className="wrapper">
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
                    {readdata[0].data.slice(0,visible).map((items) => {
                      return (
                        <>
                          <div className="col-12 col-md-3 mb-4">
                            <div className="card text text-center mb-0">
                              <Link href={ROUTE_URL.DASHBOARD}>
                              <div className="icon">
                                <Image
                                  src={items.logo}
                                  alt=""
                                  className="img-fluid mx-auto"
                                  width="140"
                                />
                              </div>
                              </Link>
                              {items.profile.name}
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
                        {/* <h1>{items.profile.name}</h1> */}
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
