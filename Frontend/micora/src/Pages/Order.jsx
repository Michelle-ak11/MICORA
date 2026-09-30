import { useState } from "react";

function Order() {
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
  e.preventDefault();

  const order = {
    service: e.target.service.value,
    quantity: quantity,
    details: e.target.details.value,
    status: "Pending",
  };

  localStorage.setItem("micoraOrder", JSON.stringify(order));

  window.location.href = "/confirmation";
};

  return (
    <div>
      <h1>Place Your Order</h1>

      <p>Provide the details for your printing order.</p>

  <form onSubmit={handleSubmit}>

  <label>Service</label>

  <select name="service" required>
    <option value="">Select a service</option>
    <option>Flyers & Posters</option>
    <option>Banners & Signage</option>
    <option>Business Cards</option>
    <option>T-Shirts & Apparel</option>
    <option>Bags & Packaging</option>
    <option>Stickers & Labels</option>
    <option>Boxes</option>
  </select>

  <br />
  <br />

  <label>Quantity</label>

  <input
    type="number"
    min="1"
    value={quantity}
    onChange={(e) => setQuantity(e.target.value)}
    required
  />

  <br />
  <br />

  <label>Upload Your Design</label>

  <input
    type="file"
    accept="image/*,.pdf"
    required
  />

  <br />
  <br />

  <label>Order Details</label>

  <textarea
    name="details"
    placeholder="Add any specifications for your order..."
    rows="5"
  ></textarea>

  <br />
  <br />

  <button type="submit">
    Place Order
  </button>

</form>
    </div>
  );
}

export default Order;