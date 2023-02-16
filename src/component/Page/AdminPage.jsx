import React from "react";
import { Col,Row } from "reactstrap";
import ProfileSection from "../Mainsection/ProfileSection";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import SideNavbar from "../SideNavbar/SideNavbar";

const AdminPage = () => {
  return (
    <section className="main-container">
      <Row>
        <Col lg="1">
          <SideNavbar />
        </Col>
        <Col lg="3">
          <ProfileSection />
        </Col>
        <Col lg='8'>
           <ProfileStatus/> 
        </Col>
      </Row>
    </section>
  );
};

export default AdminPage;
