import {
  dashboardIcon,
  datasetIcon,
  destinationIcon,
  sourceIcon,
  pipelineIcon,
  analyticsIcon,
  configIcon,
} from "@/src/assets/img/icons";
import {
  DashboardImg,
  SourceImg,
  DestinationImg,
  PipelinesImg,
  DatasetImg,
  AnalyticsImg,
  ConfigurationImg,
} from "@/src/assets/img";
import Image from "next/image";

const Dashboard = () => {
  return (
    <>
      <div className="wrapper app-header">
        <main className="main-content" id="main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h4 className="page-title">Welcome Dashboard</h4>
              </div>
            </div>
            <div className="row home-cards">
              <div className="col-12 col-md-3">
                <div className="card">
                  <div className="img-wrapper">
                    <Image
                      src={DashboardImg}
                      alt="Dashboard"
                      className="img-fluid"
                    />
                  </div>
                  <div className="icon-circle bg-white">
                    <Image
                      src={dashboardIcon}
                      alt="Dashboard"
                      className="card-icon"
                    />
                  </div>
                  <div className="card-detail">
                    <h5>Dashboard</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="card">
                  <div className="img-wrapper">
                    <Image src={SourceImg} alt="Source" className="img-fluid" />
                  </div>
                  <div className="icon-circle bg-white">
                    <Image src={sourceIcon} alt="Source" className="card-icon" />
                  </div>
                  <div className="card-detail">
                    <h5>Source</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="card">
                  <div className="img-wrapper">
                    <Image
                      src={DestinationImg}
                      alt="Destination"
                      className="img-fluid"
                    />
                  </div>
                  <div className="icon-circle bg-white">
                    <Image
                      src={destinationIcon}
                      alt="Destination"
                      className="card-icon"
                    />
                  </div>
                  <div className="card-detail">
                    <h5>Destination</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="card">
                  <div className="img-wrapper">
                    <Image
                      src={PipelinesImg}
                      alt="Pipelines"
                      className="img-fluid"
                    />
                  </div>
                  <div className="icon-circle bg-white">
                    <Image
                      src={pipelineIcon}
                      alt="Pipelines"
                      className="card-icon"
                    />
                  </div>
                  <div className="card-detail">
                    <h5>Pipelines</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="card">
                  <div className="img-wrapper">
                    <Image src={DatasetImg} alt="Dataset" className="img-fluid" />
                  </div>
                  <div className="icon-circle bg-white">
                    <Image src={datasetIcon} alt="Dataset" className="card-icon" />
                  </div>
                  <div className="card-detail">
                    <h5>Dataset</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="card">
                  <div className="img-wrapper">
                    <Image
                      src={AnalyticsImg}
                      alt="Analytics"
                      className="img-fluid"
                    />
                  </div>
                  <div className="icon-circle bg-white">
                    <Image
                      src={analyticsIcon}
                      alt="Analytics"
                      className="card-icon"
                    />
                  </div>
                  <div className="card-detail">
                    <h5>Analytics</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="card">
                  <div className="img-wrapper">
                    <Image
                      src={ConfigurationImg}
                      alt="Configuration"
                      className="img-fluid"
                    />
                  </div>
                  <div className="icon-circle bg-white">
                    <Image
                      src={configIcon}
                      alt="Configuration"
                      className="card-icon"
                    />
                  </div>
                  <div className="card-detail">
                    <h5>Configuration</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Dashboard;
