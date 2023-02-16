import React from "react";
import { Row } from "reactstrap";
import "./ProfileStatus.css";
import ProfileTable from "./ProfileTable";

const ProfileData = [
  {
    title: "Gender",
    value: "Female",
  },
  {
    title: "BirthDay",
    value: "Feb 24th 1997",
  },
  {
    title: "Phone Number",
    value: "+91 123445678",
  },
  {
    title: "Register Date",
    value: "Feb 24th 2007",
  },
  {
    title: "Street Address",
    value: "xyz Diponegro 21",
  },
  {
    title: "City",
    value: "Cilacap",
  },
  {
    title: "Zip Code",
    value: "65578",
  },
  {
    title: "Member Status",
    value: "Active Member",
  },
];

const ProfileStatus = () => {
  return (
    <section className="m-5">
      <section className="profile-box">
        {ProfileData.map((item, index) => {
          return (
            <div className="title_box ">
              <h5>{item.title}</h5>
              <h6>{item.value}</h6>
            </div>
          );
        })}
      </section>

      <section className="heading_options">
        <span>
          <li className="active_title">Upcomings Appoinments</li>
          <li>Past Appoinments</li>
          <li>Medical Records</li>
        </span>
      </section>

      <section>
        <ProfileTable />
      </section>
    </section>
  );
};

export default ProfileStatus;
