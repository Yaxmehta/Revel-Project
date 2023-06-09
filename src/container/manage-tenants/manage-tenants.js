import Image from "next/image";
import Link from "next/link";
import { No_User } from "../../assets/img";
// import { quotoneIcon, rydotIcon } from "../../assets/img/icons";
import React, { useState, useEffect } from "react";
import { ROUTE_URL } from "@/src/constant/url";
import axios from "axios";
// import readdata from "@/public/alltenants.json";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import CustomDelete from "@/src/common/customdelete.js";
import { useRouter } from "next/router";


const ManageTenants = () => {
  const [tenantData, setTenantData] = useState([]);
  const [visible, setVisible] = useState(3);
  const [deleteRecord, setDeleteRecord] = useState([]);
  const router= useRouter();

  const showmoreitem = () => {
    setVisible((predata) => predata + 8);
  };

  useEffect(() => {
    const getAllTenants = async () => {
      let token = "";

      const storedToken = localStorage.getItem("token");
      // debugger
      if (storedToken !== 'undefined') {
        token = JSON.parse(storedToken);

        //  token = JSON.parse(localStorage.getItem("token"));
      }
      else{
        router.push("http://master.revel-yax.test:3000");
      }
      // const token =JSON.parse(localStorage.getItem("token"));
      try {
        // const response = await axios.get("http://master.revel-dev.test:9876/tenant/v1/getAll", {
        //   headers: {
        //     "Content-Type": "application/json",
        //     "Authorization": `bearer ${token}`,
        //   }
        // });
        
        // setTenantData(response.data.data);
        // console.log(response.data)

        const response = await fetch("http://master.revel-dev.test:9876/tenant/v1/getAll",{
          method: "GET",
          headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
                "Accept":  "*/*",
               "Cache-Control": "no-cache",
               "Accept-Encoding": "gzip, deflate, br"
              }
        });
        // debugger
        const jsonData = await response.json();
        setTenantData(jsonData.data)
        console.log(jsonData.data);
      } catch (error) {
        console.log('Error fetching tenants:', error);
      }
    };

    getAllTenants();
  }, []);

  // function deleteTenantRecord(id) {
  //   const index = tenantData.data.findIndex((record) => record.id === id);
  //   if (index !== -1) {
  //     const deletedRecord = readdata[0].data[index];
  //     readdata[0].data.splice(index, 1);
  //     setDeleteRecord(deletedRecord)
  //   }
  //   toast.error("tenant user deleted successfully");
  // }

  const deleteTenantRecord = (id) => {
    const url = "http://master.revel-dev.test:9876/tenant/v1/delete";
    const params = { id: id }

    CustomDelete(url, params);
  }

  const hasRecords = tenantData && tenantData.length > visible;

  return (
    <>
      <div className="wrapper app-header">
        <main className="main-content" id="main">
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
                      {tenantData?.slice(0,visible).map((items) => {
                        return (
                          <>
                            <div className="col-12 col-md-3 mb-4">
                              <div className="card text text-center mb-0">
                                <Link href="#" >
                                  <div className="icon-box">
                                    <Image
                                      src={items?.logo?.logoUrl?items.logo.logoUrl:No_User}
                                      alt=""
                                      className="img-fluid mx-auto"
                                      width={100}
                                    />
                                  </div>
                                </Link>
                                {items.profile.name}
                                <div className="actions">
                                  <ul className="list-unstyled d-flex flex-row mb-0 justify-content-center">
                                    <li>
                                      <Link href="#">
                                        <i className="r-icon r-icon-info-outline"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href={items.id}>
                                        <i className="r-icon r-icon-pencil"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link 
                                        href="#"
                                        className="text-danger"
                                        onClick={() => deleteTenantRecord(items.id)}
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
                        {hasRecords && (
                          <button
                          className="btn btn-success btn-lg min-width-150"
                          onClick={showmoreitem}
                        >
                          Load More
                        </button>
                        )}
                        
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
