import "../css/login.css";
function Login() {
  return (
    <div _ngcontent-fwx-c3="" className="col-lg-6  form-section">
      <div className="main_page">
        <div className="tx">
          <p _ngcontent-fwx-c3="" className="login-wrapper-signup-text tx">
            Hi, are you new here?{" "}
            <a _ngcontent-fwx-c3="" className="ng-tns-c3-0" href="/signup">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Sign in</font>
              </font>
            </a>
          </p>
        </div>
        <div _ngcontent-fwx-c3="" className="login-wrapper">
          <h2 _ngcontent-fwx-c3="" className="login-title">
            <font style={{ verticalAlign: "inherit" }}>Access</font>
          </h2>
          <form
            _ngcontent-fwx-c3=""
            className="ng-tns-c3-0 ng-untouched ng-pristine ng-invalid"
            novalidate=""
          >
            <div _ngcontent-fwx-c3="" className="form-group inp">
              <input
                _ngcontent-fwx-c3=""
                className="form-control ng-untouched ng-pristine ng-invalid"
                formcontrolname="login_email"
                type="text"
                placeholder="E-mail"
              />
            </div>
            <div _ngcontent-fwx-c3="" className="form-group mb-3">
              <input
                _ngcontent-fwx-c3=""
                className="form-control ng-untouched ng-pristine ng-invalid"
                formcontrolname="login_password"
                id="password"
                name="login_password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div
              _ngcontent-fwx-c3=""
              className="d-flex justify-content-between align-items-center mb-5"
            >
              <div className="but">
                <button
                  _ngcontent-fwx-c3=""
                  className="btn login-btn"
                  id="login"
                  name="login"
                  type="submit"
                  disabled=""
                >
                  <div className="msg">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Please log in
                      </font>
                    </font>
                  </div>
                </button>
              </div>
              <div className="lk">
                <a
                  _ngcontent-fwx-c3=""
                  className="forgot-password-link"
                  href="/forget-password"
                >
                  <div className="passwd ">Reset your password</div>
                </a>
              </div>
            </div>
          </form>
          <div _ngcontent-fwx-c3="" className="d justify-content-between tc">
            By accessing or registering you declare to accept the{" "}
            <a
              _ngcontent-fwx-c3=""
              className="ng-tns-c3-0"
              href="http://www.paciolo.com/terms/"
              target="_blank"
            >
              terms and conditions
            </a>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}> and the </font>
            </font>
            <a
              _ngcontent-fwx-c3=""
              className="ng-tns-c3-0"
              href="http://www.paciolo.com/privacy/"
              target="_blank"
            >
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  privacy policy.
                </font>
              </font>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
