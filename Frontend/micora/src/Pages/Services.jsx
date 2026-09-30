function Services() {
  const services = [
    "Flyers & Posters",
    "Banners & Signage",
    "Business Cards",
    "T-Shirts & Apparel",
    "Bags & Packaging",
    "Stickers & Labels",
    "Boxes",
  ];

  return (
    <div>
      <h1>Our Services</h1>

      <p>Choose a printing or branding service.</p>

      {services.map((service) => (
        <div key={service}>
          <h2>{service}</h2>
          <p>Quality printing service available.</p>

          <a href="/order">
            <button>Choose Service</button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Services;