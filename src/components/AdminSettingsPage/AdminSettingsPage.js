import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminSettingsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <nav className={`bg-light border ${sidebarOpen ? "w-25" : "w-10"}`}>
        <button
          className="btn btn-primary m-2"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Collapse" : "Expand"}
        </button>
        <ul className="list-unstyled p-2">
          <li><a href="#profile" className="text-decoration-none">Profile Settings</a></li>
          <li><a href="#security" className="text-decoration-none">Security</a></li>
          <li><a href="#notifications" className="text-decoration-none">Notifications</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="p-4 w-100">
        <h2>Admin Settings</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <button type="submit" className="btn btn-success">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
