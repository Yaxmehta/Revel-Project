import Header from "@/src/common/header/header";
import PageHeader from "@/src/config/PageHeader"
import { HEADER_TITLE, NAVBAR_TITLE } from "@/src/constant/titles";
import UserList from "@/src/container/user/user-list";

const Home=()=>{
    return(
        <>
       <PageHeader title={NAVBAR_TITLE.USERLIST} />
        <Header title={HEADER_TITLE.HOME}/>
        <UserList/>
        </>
    )
}
export default Home;