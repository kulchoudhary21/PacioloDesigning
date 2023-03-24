import "../css/login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div _ngcontent-fwx-c3="" className="col-lg-6  form-section">
      <div className="main_page">
        <d  iv className="tx">
          <p _ngcontent-fwx-c3="" className="login-wrapper-signup-text tx">
            Hi, are you new here?{" "}
            <Link _ngcontent-fwx-c3="" className="ng-tns-c3-0" to="/signin">
              Sign in
            </Link>
          </p>
        </d>
        <div _ngcontent-fwx-c3="" className="login-wrapper">
          <h2 _ngcontent-fwx-c3="" className="login-title">
            Access
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
                  <div className="msg">Please log in</div>
                </button>
              </div>
              <div className="lk">
                <Link
                  _ngcontent-fwx-c3=""
                  className="forgot-password-link"
                  to="/forget-password"
                >
                  <div className="passwd ">Reset your password</div>
                </Link>
              </div>
            </div>
          </form>
          <div _ngcontent-fwx-c3="" className="d justify-content-between tc">
            By accessing or registering you declare to accept the{" "}
            <Link
              _ngcontent-fwx-c3=""
              className="ng-tns-c3-0"
              to="http://www.paciolo.com/terms/"
              target="_blank"
            >
              terms and conditions
            </Link>
            and the
            <Link
              _ngcontent-fwx-c3=""
              className="ng-tns-c3-0"
              to="http://www.paciolo.com/privacy/"
              target="_blank"
            >
              privacy policy.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
