import Header from "@/src/common/header/header";
import PageHeader from "@/src/config/PageHeader"
import { HEADER_TITLE, NAVBAR_TITLE } from "@/src/constant/titles";
import AddTenants from "@/src/container/manage-tenants/addTenants";


const Home=()=>{
    return(
        <>
       <PageHeader title={HEADER_TITLE.ADDTENANT} />
        <Header title={NAVBAR_TITLE.TENANT}/>
        <AddTenants/>
        </>
    )
}
export default Home;