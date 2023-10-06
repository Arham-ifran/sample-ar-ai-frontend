import React from "react";
import { Link } from "react-router-dom";
import { ENV } from "../../config/config";
const Layout1 = (props) => {
  return (
    <div className="login-bg">
      {props.children}
      <footer className="footer">
        <ul>
          <li>
            <span>By signing in, I confirm that I have read and accepted </span>
            <br /> {ENV?.appName}’s{" "}
            <Link to="/terms-conditions">Terms &amp; Conditions</Link> and{" "}
            <Link to="/privacy-policy">Privacy Policy.</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout1;
