import { Logo, loginImg } from "../../assets/img";
import Image from "next/image";
import Link from "next/link";
import { ROUTE_URL } from "@/src/constant/url";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [show, setShow] = useState(false);
  const [api, setApi] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const router = useRouter();
  const handlePasswordChange = (evnt) => {
    setPassword(evnt.target.value);
  }
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }

  // const get= async()=>{

  //    const params={
  //       client_id: "master",
  //       redirect_uri: "/auth",
  //       response_type: "code",
  //       scope: "api.read",

  //    }

  //    const value= await fetch("http://master.revel-dev.test:8051/oauth2/authorize",params);
  //    setApi(value);

  // }

  // useEffect(()=>{
  //    get();
  //   //  window.location.href="/auth";
  // },[]);

  // const params = {
  //   client_id: "master",
  //   redirect_uri: "./",
  //   response_type: "code",
  //   scope: "api.read",
  // };

  // useEffect(() => {
  //   const handleLogin = async () => {
  //     try {
  //       // Make an API call to the authentication endpoint
  //       const response = await fetch(
  //         "http://master.revel-dev.test:8051/oauth2/authorize",
  //         params,
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({ username, password }),
  //         }
  //       );

  //       if (response.ok) {
  //         const data = await response.json();
  //         setApi(data);
  //         console.log(data);
  //       } else {
  //         // Handle authentication error
  //         console.error();
  //         "Authentication failed:", response.status;
  //       }
  //     } catch (error) {
  //       console.error("An error occurred during authentication:", error);
  //       console.log("error", error);
  //     }
  //   };
  //   handleLogin();
  // }, []);

  // const handleShow=()=>{
  //   setShow(!show);
  // }

  var clientId = "master";
  //  var redirectUri = 'https://spring.io/auth';
  var redirectUri = "http://master.revel-yax.test:3000/loginmiddleware";
  var authorizationEndpoint = 'http://master.revel-dev.test:8051/oauth2/authorize';
  var authorizationUrl = authorizationEndpoint + '?response_type=code&client_id=' + clientId + '&scope=api.read&redirect_uri=' + encodeURIComponent(redirectUri);
   console.log('authorizationUrl', authorizationUrl)

  useEffect(() => {
    router.push(authorizationEndpoint + '?response_type=code&client_id=' + clientId +  '&scope=api.read&redirect_uri=' + encodeURIComponent(redirectUri))
  }, [])

  return (
    <>
      {/* <div className="wrapper login-page">
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
                <form className="form"></form>
                <div className="form-group label-inside">
                  <div className="input-wrapper">
                    <input
                      className="input"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      type="text"
                      placeholder=" "
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      data-placeholder="Email Address"
                      required
                    />
                    <span className="placeholder">Email Address</span>
                    <div className="icon-box">
                      <i className="r-icon r-icon-mail"></i>
                    </div>
                  </div>
                </div>

                <div className="form-group label-inside">
                  <div className="input-wrapper">
                    <input
                      className="input"
                      type={passwordType}
                      placeholder=""
                      value={password}
                      onChange={handlePasswordChange}
                      data-placeholder="Password"
                      required
                    />
                    <span className="placeholder">Password</span>
                    <div className="icon-box">
                      <i className="r-icon r-icon-lock1"></i>
                    </div>
                    <div className="icon-box-eye1" onClick={togglePassword}>
                      {passwordType === "password" ? <i className="r-icon r-icon-eye-blocked"></i> : <i className="r-icon r-icon-eye"></i>}
                    </div>
                  </div>
                </div>

                <div className="d-flex justyfy-content-between form-group my-3">
                  <div className="custom-control custom-checkbox text-muted">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="remember_me"
                      name="example1"
                    />
                    <label className="custom-control-label" htmlFor="remember_me">
                      Remember me
                    </label>
                  </div>
                  <Link href="#" className="d-block ml-auto">
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
      </div> */}


    </>
  );
};
export default Login;
