import Dashboard from "@/src/container/dashboard/dashboard";
import PageHeader from "@/src/config/PageHeader";
import { HEADER_TITLE ,NAVBAR_TITLE} from "@/src/constant/titles";
import Header from "@/src/common/header/header";
const Home=()=>{
    return (
        <>
        <PageHeader title={NAVBAR_TITLE.DASHBOARD} />
        <Header title={HEADER_TITLE.HOME}/>
        <Dashboard/>
        </>
    )
}
export default Home;