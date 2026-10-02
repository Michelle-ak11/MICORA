import { useState } from "react";
import "./signup.css"; // create this file

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1>Create your MICORA account</h1>
        <p className="subtitle">Join us and get started in seconds</p>

        <form
          className="auth-form"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "/dashboard";
          }}
        >
          <div className="input-group">
            <input
              type="text"
              placeholder="Full Name"
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              maxLength={16}
              required
            />
          </div>

          <label className="show-password">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </label>

          <button type="submit" className="signup-btn">
            Create Account
          </button>
        </form>

        <p className="login-text">
          Already have an account?{" "}
          <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;