import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({ age: "", contact: "" });

  return (
    <div className="page-container">
      <div className="card">
        <h2>Profile</h2>

        <div className="input-group">
          <input
            placeholder="Age"
            onChange={(e) => setProfile({ ...profile, age: e.target.value })}
          />
        </div>

        <div className="input-group">
          <input
            placeholder="Contact"
            onChange={(e) =>
              setProfile({ ...profile, contact: e.target.value })
            }
          />
        </div>

        <div className="input-group">
          <select onChange={(e) => navigate(`/verify/${e.target.value}`)}>
            <option value="">Select Verification</option>
            <option value="logo">Institution Logo Verification</option>
            <option value="exam-paper">Exam Paper Verification</option>
            <option value="signature">Digital Signature Verification</option>
            <option value="qr">QR Code Verification</option>
            <option value="correction">Fake Correction Detection</option>
          </select>
        </div>
      </div>
    </div>
  );
}
