import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <p className="pull-left">Copyright &copy; 2017 Your Website Name</p>
      <p className="pull-right">
        Mediumish Theme by
        <Link target="_blank" to="https://www.wowthemes.net">
          WowThemes.net
        </Link>
      </p>
      <div className="clearfix"></div>
    </div>
  );
}

export default Footer;
