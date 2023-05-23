import PageHeader from "@/src/config/PageHeader";
import { HEADER_TITLE ,NAVBAR_TITLE} from "@/src/constant/titles";
import Header from "@/src/common/header/header";
import DataSet from "@/src/container/dataset/dataset";
const Home=()=>{
    return (
        <>
        <PageHeader title={NAVBAR_TITLE.DATASET} />
        <Header title={HEADER_TITLE.HOME}/>
        <DataSet/>
        </>
    )
}
export default Home;