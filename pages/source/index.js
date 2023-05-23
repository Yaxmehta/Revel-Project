import PageHeader from "@/src/config/PageHeader";
import { HEADER_TITLE ,NAVBAR_TITLE} from "@/src/constant/titles";
import Header from "@/src/common/header/header";
import Source from "@/src/container/source/source";

const Home = () => {
  return (
    <>
    <PageHeader title={NAVBAR_TITLE.SOURCE} />
    <Header title={HEADER_TITLE.HOME}/>
    <Source />
    </>
  );
};
export default Home;