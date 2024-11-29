import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SourcingExtension = () => {
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");

  const handleImport = () => {
    setProgress(50);
    setTimeout(() => {
      setProgress(100);
      setStatusMessage("Candidate imported successfully!");
    }, 1000);
  };

  return (
    <div className="container mt-4">
      <h2>Recruit CRM Sourcing Extension</h2>
      
      {/* Status Message */}
      {statusMessage && <div className="alert alert-success">{statusMessage}</div>}

      {/* Candidate Card */}
      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <h5 className="card-title">Candidate: John Doe</h5>
          <p className="card-text">LinkedIn Profile: <a href="#">View</a></p>
          <button className="btn btn-primary" onClick={handleImport}>
            Import Candidate
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      {progress > 0 && (
        <div className="progress mt-3">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {progress}%
          </div>
        </div>
      )}
    </div>
  );
};

export default SourcingExtension;
