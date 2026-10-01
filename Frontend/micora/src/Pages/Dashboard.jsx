function Dashboard() {
  return (
    <div>
      {/* Header */}
     <header className="dashboard-header">
      <div>
        <h2>MICORA</h2>
        <p>Printing Hub</p>
      </div>

      <div className="user">

      </div>

      

      <a href="/logout">
        <button>Logout</button>
      </a>


     </header>

      {/* Welcome Section */}
      <main>
        <section className="welcome-section">
     <p>Welcome Back 👋!</p>

          <h2> What would you like to print today?</h2>
            <p>
          Bring your ideas to life with quality printing and branding
          services from MICORA.
  </p>
      
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

            <a href="/track-order">
              <button>Track Order</button>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;