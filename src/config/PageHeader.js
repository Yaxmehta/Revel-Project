import Head from "next/head";
const PageHeader = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Revel</title>
        <link rel="stylesheet" href="../src/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/revel.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
      </Head>
      <script src="assets/js/jquery.slim.min.js"></script>
      <script src="assets/js/bootstrap.bundle.min.js"></script>
      <script src="assets/js/owl.carousel.min.js"></script>
      <script src="assets/js/script.js"></script>
    </>
  );
};
export default PageHeader;
