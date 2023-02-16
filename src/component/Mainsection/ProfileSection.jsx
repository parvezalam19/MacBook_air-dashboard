import React from "react";
import { Row, Col } from "reactstrap";
import "./Profile.css";

const file = [
  "Check Up Results.pdf",
  "Check Up Results.pdf",
  "Medical Prescription",
  "Dental X-Ray Result.pdf",
];
const ProfileSection = () => {
  return (
    <section className="mx-4 mt-5">
      <main>
        <div className="profile_img ">
          <img
            src="https://images.unsplash.com/photo-1491616569293-e27f7f4cd41a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFjayUyMG9mJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
          />
        </div>
        <h3 className="profile_title mt-5">Parvez Alam</h3>
        <h6 className="mt-0">parvezalam9970@gmail.com</h6>
        <div className="profile_content d-flex justify-content-center gap-5">
          <div style={{ borderRight : "2px solid gray" ,padding: "0 40px"}}>
            <span >14</span>
            <h6>Past</h6>
          </div>
          <div>
            <span>14</span>
            <h6>Upcoming</h6>
          </div>
        </div>
        <button className="btn btn-danger w-100 mt-3">Send Message</button>
      </main>

      <main className="files_container">
        <h4 className="mt-5">Files/ Documents</h4>
        {file.map((elm, index) => (
          <li className="file_list" key={index}>
            <i class="ri-file-pdf-line"></i> <span>{elm}</span>
          </li>
        ))}
      </main>
    </section>
  );
};

export default ProfileSection;
