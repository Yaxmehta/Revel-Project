import {Logo,loginImg} from "../../assets/img";
import Image from "next/image";
import Link from "next/link";
import { ROUTE_URL } from "@/src/constant/url";
const Login = () => {
  
  return (
    <>
      <div className="wrapper login-page">
        <div className="container">
          <div className="row h-100-vh align-items-center">
            <div className="col-12 col-md-6">
              <div className="login-form">
                <div className="logo text-center">
                  <Image
                    src={Logo}
                    alt="Revel"
                    className="img-fluid"
                    width="280"
                  ></Image>
                </div>
                <div className="form-group label-inside">
                  <div className="mb-2" htmlFor="email"> Email Address</div>
                  <div className="icon-box">
                    <i className="r-icon r-icon-mail"></i>
                  </div>
                  <input type="text" className="form-control" id="email" />
                  
                </div>
                <div className="form-group label-inside">
                  <div className="mb-2" htmlFor="password"> Password</div>
                  <div className="icon-box">
                    <i className="r-icon r-icon-lock1"></i>
                  </div>
                  <input type="password" className="form-control" id="password" />
                  
                </div>
                <div className="d-flex justyfy-content-between form-group my-3">
                  <div className="custom-control custom-checkbox text-muted">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="remember_me"
                      name="example1"
                    />
                    <label className="custom-control-label" for="remember_me">
                      Remember me
                    </label>
                  </div>
                  <Link href={ROUTE_URL.CHANGEPASSWORD} className="d-block ml-auto">
                    Forgot Password?
                  </Link>
                </div>
                <Link
                  href={ROUTE_URL.TENANTS}
                  className="btn btn-primary btn-block mt-4 mb-5"
                >
                  Login
                </Link>
                <p className="text-center text-muted">
                  Don't have an account?{" "}
                  <Link href="sign-up.html">Sign up</Link>
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <Image
                src={loginImg}
                alt="login-img"
                className="img-fluid"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
