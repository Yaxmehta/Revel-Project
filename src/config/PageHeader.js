import Head from "next/head";
import { Revel } from "../assets/img";
const PageHeader = (props) => {
  const { title } = props;
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="//fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
        rel="stylesheet"
      />
      <link rel="icon" type="image/png" sizes="16x16" href={Revel.src} />
      <meta charSet="UTF-8"></meta>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <title>Revel</title>
      <title>{title}</title>
      {/* <link rel="stylesheet" href="assets/css/bootstrap.min.css"></link> */}
      {/* <link rel="stylesheet" href="assets/css/font-awesome.css"></link> */}
      {/* <link rel="stylesheet" href="assets/css/style.css"></link> */}
    </Head>
  );
};
export default PageHeader;