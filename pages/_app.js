import '@/styles/globals.css'
import "../src/assets/css/bootstrap.min.css"
import "../src/assets/css/revel.css"
import "../src/assets/css/responsive.css"
import "../src/assets/css/style.css";
import Header from '@/src/common/header/header';
import Script from 'next/script';


export default function App({ Component, pageProps }) {
  return (
    <>
    {/* <Header/> */}

    {/* <Script src="assets/js/jquery.slim.min.js"/> */}
    {/* <Script src="assets/js/bootstrap.bundle.min.js"/>
    <Script src="assets/js/owl.carousel.min.js"/>
    <Script src="assets/js/script.js"/>

<Script src="@/src/assets/js/jquery.slim.min.js"/> */}

    <Component {...pageProps} />
    
    </>

  )
}
