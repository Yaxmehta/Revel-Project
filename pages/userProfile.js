import Header from "@/src/common/header/header";
import PageHeader from "@/src/config/PageHeader"
import { HEADER_TITLE, NAVBAR_TITLE } from "@/src/constant/titles";
import UserProfile from "@/src/container/userProfile/userProfile";

const Home=()=>{
    return(
        <>
       <PageHeader title={NAVBAR_TITLE.USERPROFILE} />
        <Header title={HEADER_TITLE.HOME}/>
        <UserProfile/>
        </>
    )
}
export default Home;