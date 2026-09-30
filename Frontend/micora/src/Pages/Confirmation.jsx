function Confirmation() {
  return (
    <div>
      <h1>Order Confirmed!</h1>

      <p>Your order has been placed successfully.</p>

      <h2>Order #001</h2>

      <p>
        <strong>Status:</strong> Pending
      </p>

      <a href="/track-order">
        <button>Track My Order</button>
      </a>

      <a href="/dashboard">
        <button>Back to Dashboard</button>
      </a>
    </div>
  );
}

export default Confirmation;