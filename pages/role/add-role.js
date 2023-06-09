import PageHeader from "@/src/config/PageHeader";
import { HEADER_TITLE ,NAVBAR_TITLE} from "@/src/constant/titles";
import Header from "@/src/common/header/header";
import Add_Role from "@/src/container/role/add-role";


const Home = () => {
  return (
    <>
    <PageHeader title={NAVBAR_TITLE.ADDROLE} />
    <Header title={HEADER_TITLE.ROLEMANAGEMENT}/>
    < Add_Role/>
    </>
  );
};
export default Home;