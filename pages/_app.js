import '@/styles/globals.css'
import "../src/assets/css/bootstrap.min.css"
import "../src/assets/css/revel.css"
import "../src/assets/css/responsive.css"
import "../src/assets/css/style.css";
import {Toast} from "@/src/common/toast/toast";
import { useEffect } from 'react';
import queryString from "query-string";
// import {TokenProvider} from "@/src/common/useToken";

export default function App({ Component, pageProps }) {
  
  return (
    <>
     {/* <TokenProvider> */}
     <Component {...pageProps} />
     <Toast/>
     {/* </TokenProvider> */}
    </>

  )
}
