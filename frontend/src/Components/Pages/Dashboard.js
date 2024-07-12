import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Frame152 from "./Assets/Images/Frame 152.png";
import Frame154 from "./Assets/Images/Frame 154.png";
import Frame96 from "./Assets/Images/frame96.png";
import Last from "./Assets/Images/last.jpg";
import "./db.css";

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const { phoneId } = location.state || {}; // Retrieve phoneId from state

  console.log(phoneId);

  return (
    <div>
      <section className="main-body">
        <div className="poster">{/* Your poster content */}</div>
        <div className="container">
          <div className="content">
            <img src={Frame96} alt="Rectangle 273" />
            <button
              className="button"
              onClick={() =>
                navigate("/ComplaintRegister", { state: { phoneId: phoneId } })
              }
            >
              Lodge Complaint
            </button>
          </div>
          <div className="content">
            <img src={Frame154} alt="Rectangle 273" />
            <button
              className="button"
              onClick={() =>
                navigate("/ComplaintView", { state: { phoneId: phoneId } })
              }
            >
              View All Complaints
            </button>
          </div>
          <div className="content">
            <img src={Frame152} alt="Rectangle 273" />
            <button
              className="button"
              onClick={() =>
                navigate("/TrackComplaints", { state: { phoneId: phoneId } })
              }
            >
              View Ongoing Status
            </button>
          </div>
          <div className="content">
            <img src={Last} alt="Rectangle 273" />
            <button
              className="button"
              onClick={() => navigate("/FeedbackForm")}
            >
              Feedback
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
