import React from "react";
import { Col, Row } from "reactstrap";

const userData = [
  {
    title: "26 Nov 19",
    value: "09:00-10:00",
    treatment: "Open Access",
    dentist: "Dr Adam H.",
    nurse: "Jesimics",
  },
  {
    title: "27 Nov 19",
    value: "11:00-12:00",
    treatment: "Checkup",
    dentist: "Dr Sarah K.",
    nurse: "Lisa",
  },
];

const ProfileTable = () => {
  return (
    <Row className="mx-2 mt-3">
      <section className="Appoinment_list px-5">
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ marginBottom: "1px solid gray" }}
        >
          <h6 className="mt-4">Root Canal Treatment</h6>
          <h6 className="mt-4 active_title px-3 py-2">Show Previous Treatment</h6>
        </div>
        <div className="user_list">
          {userData.map((item, i) => (
            <div className="data_list">
            <span style={{ borderRight: "2px solid gray" ,padding:'0 30px'}}>
              <h6 className="big-title text-dark">{item.title}</h6>
              <h6>{item.value}</h6>
            </span>
            <span style={{ borderRight: "2px solid gray" ,padding:'0 30px'}}>
              <h5>Treatment</h5>
              <h6>{item.treatment}</h6>
            </span>
            <span style={{ marginLeft: "50px" }}>
              <h5>Dentist</h5>
              <h6>{item.dentist}</h6>
            </span>
            <span style={{ marginLeft: "10px" }}>
              <h5>Nurse</h5>
              <h6>{item.nurse}</h6>
            </span>
            <span>
              <a href="">
                <i className="ri-file-text-line"></i> Notes
              </a>
            </span>
          </div>
          
          ))}
        </div>
      </section>
    </Row>
  );
};

export default ProfileTable;
