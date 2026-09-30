import { useEffect, useState } from "react";

function TrackOrder() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem("micoraOrder");

    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  if (!order) {
    return (
      <div>
        <h1>No Order Found</h1>

        <p>You have not placed an order yet.</p>

        <a href="/services">
          <button>Browse Services</button>
        </a>
      </div>
    );
  }

  return (
    <div>
      <h1>Track Your Order</h1>

      <p>Here is your current order.</p>

      <div>
        <h2>Your Order</h2>

        <p>
          <strong>Service:</strong> {order.service}
        </p>

        <p>
          <strong>Quantity:</strong> {order.quantity}
        </p>

        <p>
          <strong>Details:</strong> {order.details || "No additional details"}
        </p>

        <p>
          <strong>Status:</strong> {order.status}
        </p>
      </div>

      <hr />

      <h2>Order Progress</h2>

      <p>✓ Order Placed</p>
      <p>○ Printing</p>
      <p>○ Ready</p>
      <p>○ Delivered</p>

      <br />

      <a href="/dashboard">
        <button>Back to Dashboard</button>
      </a>
    </div>
  );
}

export default TrackOrder;