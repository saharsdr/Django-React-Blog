import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <p className="pull-left">Copyright &copy; 2021 My</p>
      <p className="pull-right">
        My Theme by{" "}
        <a target="_blank" href="">
          Sahar Sadri
        </a>
      </p>
      <div className="clearfix"></div>
    </div>
  );
}

export default Footer;
