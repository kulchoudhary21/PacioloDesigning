import "../css/home.css";
import logo from "../Images/paciolo.png";
import bg from "../Images/login-bg.jpg";
function Home() {
  return (
    <div _ngcontent-vnh-c3="" className=" col-lg-6 intro-section">
      <div className="page">
        <div _ngcontent-vnh-c3="" className="brand-wrapper">
          <img _ngcontent-vnh-c3="" className="logo" alt="" src={logo} />
        </div>
        <div _ngcontent-vnh-c3="" className="intro-content-wrapper">
          <h1 _ngcontent-vnh-c3="" className="intro-title">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }} className="wel">
                Welcome to Paciolo
              </font>
            </font>
          </h1>
          <p _ngcontent-vnh-c3="" className="intro-text">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                The Revolutionary Management Software for Professionals, SMEs,
                Companies and Flat Rates.{" "}
              </font>
              <font style={{ verticalAlign: "inherit" }}>
                Access tons of unique and innovative features.
              </font>
            </font>
          </p>
        </div>
        <div _ngcontent-vnh-c3="" className="intro-section-footer">
          <p _ngcontent-vnh-c3="" className="ng-tns-c3-0">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Copyright 2022 - Paciolo
              </font>
            </font>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
