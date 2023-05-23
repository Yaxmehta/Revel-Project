import PageHeader from "@/src/config/PageHeader";
import { HEADER_TITLE ,NAVBAR_TITLE} from "@/src/constant/titles";
import Header from "@/src/common/header/header";
import Role_Management from "@/src/container/role/role-management";

const Home=()=>{
    return (
        <>
        <PageHeader title={NAVBAR_TITLE.ROLEMANAGEMENT} />
        <Header title={HEADER_TITLE.HOME}/>
        <Role_Management/>
        </>
    )
}
export default Home;