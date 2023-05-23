import PageHeader from "@/src/config/PageHeader";
import Login from "@/src/container/login/login";
import { HEADER_TITLE} from "@/src/constant/titles";
const Home=()=>{
  return (
    <>
    <PageHeader title={HEADER_TITLE.LOGIN}/>
    <Login/>
    </>
  )
};
export default Home;