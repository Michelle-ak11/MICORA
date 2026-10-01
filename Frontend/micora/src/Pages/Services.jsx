import { useState, useEffect } from "react";

function Services() {
  const [services, setServices] = useState([]);   // starts empty
  const [loading, setLoading] = useState(true);    // track loading state
  const [error, setError] = useState(null);        // track any fetch errors

  useEffect(() => {
    fetch("https://micora.onrender.com/api/services")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        return response.json();
      })
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // empty array = "run this once, when the page first loads"

  if (loading) return <p>Loading services...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Our Services</h1>
      <p>Choose a printing or branding service.</p>

      {services.map((service) => (
        <div key={service.id}>
          <h2>{service.name}</h2>
          <p>{service.description}</p>
          <p>
            ${service.basePrice} ({service.unit})
          </p>

          <a href="/order">
            <button>Choose Service</button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Services;