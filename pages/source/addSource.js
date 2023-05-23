import PageHeader from "@/src/config/PageHeader";
import { HEADER_TITLE ,NAVBAR_TITLE} from "@/src/constant/titles";
import Header from "@/src/common/header/header";
import AddSource from "@/src/container/source/addSource";

const Home = () => {
  return (
    <>
    <PageHeader title={NAVBAR_TITLE.ADDSOURCE} />
    <Header title={HEADER_TITLE.HOME}/>
    <AddSource />
    </>
  );
};
export default Home;