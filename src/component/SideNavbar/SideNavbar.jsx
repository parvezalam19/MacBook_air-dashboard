import React from "react";
import { Col, Row } from "reactstrap";
import "./SideNav.css";

const SideNavbar = () => {
  return (
    <section className="nav_item">
      <div className="nav_links active">
        <i class="ri-line-chart-line"></i>
      </div>
      <div className="nav_links">
        <i class="ri-add-line"></i>
        <span>New</span>
      </div>
      <div className="nav_links">
        <i class="ri-group-fill"></i>
        <span>PATIENT</span>
      </div>
      <div className="nav_links">
        <i class="ri-folder-2-line"></i>
        <span>Folder</span>
      </div>
      <div className="nav_links">
        <i class="ri-file-upload-line"></i>

        <span>Upload</span>
      </div>
      <div className="nav_links">
        <i class="ri-file-chart-line"></i>

        <span>Report</span>
      </div>
      <div className="nav_links">
        <i class="ri-settings-2-line"></i>
        <span>Setting</span>
      </div>
      <div className="nav_links">
        <i class="ri-close-line"></i>
        <span>Exit</span>
      </div>
    </section>
  );
};

export default SideNavbar;
