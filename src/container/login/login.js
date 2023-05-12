import {Logo,loginImg} from "../../assets/img";
import Image from "next/image";
import Link from "next/link";
import { ROUTE_URL } from "@/src/constant/url";
const Login = () => {
  return (
    <>
      <div class="wrapper login-page">
        <div class="container">
          <div class="row h-100-vh align-items-center">
            <div class="col-12 col-md-6">
              <div class="login-form">
                <div class="logo text-center">
                  <Image
                    src={Logo}
                    alt="Revel"
                    className="img-fluid"
                    width="280"
                  ></Image>
                </div>
                <div class="form-group label-inside">
                  <div class="mb-2"> Email Address</div>
                  <div class="icon-box">
                    <i class="r-icon r-icon-mail"></i>
                  </div>
                  <input type="text" class="form-control" id="email" />
                </div>
                <div class="form-group label-inside">
                  <div class="mb-2"> Password</div>
                  <div class="icon-box">
                    <i class="r-icon r-icon-lock1"></i>
                  </div>
                  <input type="password" class="form-control" id="password" />
                </div>
                <div class="d-flex justyfy-content-between form-group my-3">
                  <div class="custom-control custom-checkbox text-muted">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="remember_me"
                      name="example1"
                    />
                    <label class="custom-control-label" for="remember_me">
                      Remember me
                    </label>
                  </div>
                  <Link href="javascript:void(0)" class="d-block ml-auto">
                    Forgot Password?
                  </Link>
                </div>
                <Link
                  href={ROUTE_URL.MANAGETENANTS}
                  class="btn btn-primary btn-block mt-4 mb-5"
                >
                  Login
                </Link>
                <p class="text-center text-muted">
                  Don't have an account?{" "}
                  <Link href="sign-up.html">Sign up</Link>
                </p>
              </div>
            </div>
            <div class="col-12 col-md-6">
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
