//original

import React from "react";

import trash from "./Assets/Icons/delete.jpg"; // Assuming this is the correct path to your trash image
import image1 from "./Assets/Images/road.jpg";
import "./TrackComplaint.css";
import { useNavigate } from "react-router-dom";

const complaints = [
  {
    trackingId: "#20462",
    date: "13/05/2024",
    category: "Road Problem",
    photo: image1,
    Complaint:
      "Lorem ipsum dolor sit amet consectetur. Quis sollicitudin orci libero aliquet feugiat tempus vel. Id ac mattis in dui pulvinar  Id ac mattis in dui pulvinar  Id ac mattis ...",
    Status: "Resolved",
  },
  {
    trackingId: "#20463",
    date: "14/05/2024",
    category: "Water Leakage",
    photo: "image2",
    Complaint:
      "Vivamus tristique eros vitae magna mollis, a pulvinar felis tincidunt. Praesent id dolor ut justo facilisis tempor at a augue. Sed at fringilla ipsum ...",
    Status: "Pending",
  },
  {
    trackingId: "#20464",
    date: "15/05/2024",
    category: "Street Light",
    photo: "image3",
    Complaint:
      "Duis et nisi id nisi facilisis sodales. Integer vehicula lacinia lacus, vel bibendum eros. Integer nec nulla et libero dignissim posuere ...",
    Status: "In Progress",
  },
  {
    trackingId: "#20465",
    date: "16/05/2024",
    category: "Garbage Collection",
    photo: "image4",
    Complaint:
      "Aliquam erat volutpat. Phasellus gravida dapibus justo, ut consectetur ipsum malesuada at. Proin laoreet nisl et dolor egestas suscipit ...",
    Status: "Resolved",
  },

  {
    trackingId: "#20467",
    date: "18/05/2024",
    category: "Power Outage",
    photo: "image6",
    Complaint:
      "Sed euismod felis nec neque consequat, non condimentum ex vestibulum. Nulla at vehicula sapien, sed sagittis ex. Donec rutrum orci vitae ...",
    Status: "Resolved",
  },
  {
    trackingId: "#20468",
    date: "19/05/2024",
    category: "Potholes",
    photo: "image7",
    Complaint:
      "Ut tincidunt augue et urna fermentum, ac luctus ipsum feugiat. Cras eu enim vel risus malesuada tincidunt a ut magna ...",
    Status: "In Progress",
  },
];

export default function Complaints() {

  const navigate = useNavigate();
  return (
    <div>
      <h1 id="ComplaintHeading">Track My Complaint</h1>

      <table className="complaint-table">
        <thead>
          <tr>
            <th>Tracking ID</th>
            <th>Date</th>
            <th>Category</th>
            <th>Photo</th>
            <th>Complaint</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint, index) => (
            <tr key={index} className={index % 2 === 0 ? "even" : "odd"}>
              <td>{complaint.trackingId}</td>
              <td>{complaint.date}</td>
              <td>{complaint.category}</td>
              <td>
                <img
                  src={complaint.photo}
                  alt="complaint"
                  style={{ width: "5em", height: "5em" }}
                />
              </td>
              <td className="complaint">{complaint.Complaint}</td>
              <td
                className={`status ${complaint.Status.toLowerCase().replace(
                  " ",
                  "-"
                )}`}
              >
                {complaint.Status}
              </td>
              <td className="action">
                <img src={trash} alt="trash bin" className="trash-icon" />
                {complaint.Status === "Resolved" && (
                  <button className="confirm-button">Confirm</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="last-button">
          <button type="button" className="text-blue-600 hover:text-blue-800" onClick={()=> navigate("/dashboard")}>Return to HomePage</button>
      </div>
    </div>
  );
}
