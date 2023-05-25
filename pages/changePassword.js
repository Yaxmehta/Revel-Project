import Header from "@/src/common/header/header";
import PageHeader from "@/src/config/PageHeader"
import { HEADER_TITLE, NAVBAR_TITLE } from "@/src/constant/titles";
import ForgotPassword from "@/src/container/password/changePassword";



const Home=()=>{
    return(
        <>
       <PageHeader title={NAVBAR_TITLE.CHANGEPASSWORD} />
        <Header title={HEADER_TITLE.HOME}/>
        <ForgotPassword/>
        </>
    )
}
export default Home;