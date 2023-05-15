import Header from "@/src/common/header/header";
import PageHeader from "@/src/config/PageHeader"
import { HEADER_TITLE } from "@/src/constant/titles";
import ManageTenants from "@/src/container/manage-tenants/manage-tenants"

const Home=()=>{
    return(
        <>
    
        <Header title={HEADER_TITLE.HOME}/>
        <ManageTenants/>
        </>
    )
}
export default Home;