import { useParams } from "react-router-dom";

export default function Verify() {
  const { type } = useParams();

  const titles = {
    logo: "Institution Logo Verification",
    "exam-paper": "Exam Paper Verification",
    signature: "Coordinator Digital Signature Verification",
    qr: "QR Code Certificate Verification",
    correction: "Fake Correction Detection",
  };

  return (
    <div>
      <h2>{titles[type]}</h2>
      <p>Upload document and verification logic will be implemented here.</p>
    </div>
  );
}
