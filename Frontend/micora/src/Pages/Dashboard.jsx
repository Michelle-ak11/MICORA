import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      {/* Header */}
      <header className="dashboard-header">
        <div>
          <h2>MICORA</h2>
          <p>Printing Hub</p>
        </div>

        <div className="user"></div>

        <Link to="/logout">
          <button>Logout</button>
        </Link>
      </header>

      {/* Welcome Section */}
      <main>
        <section className="welcome-section">
          <p>Welcome Back 👋!</p>

          <h2>What would you like to print today?</h2>
          <p>
            Bring your ideas to life with quality printing and branding
            services from MICORA.
          </p>

          <Link to="/services">
            <button>Services</button>
          </Link>
        </section>

        {/* Recent Order */}
        <section>
          <h2>Recent Order</h2>

          <div>
            <p>
              <strong>Order:</strong> #001
            </p>

            <p>
              <strong>Service:</strong> Flyers & Posters
            </p>

            <p>
              <strong>Status:</strong> Pending
            </p>

            <Link to="/track-order">
              <button>Track Order</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;