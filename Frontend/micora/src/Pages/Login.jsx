import { useState } from "react";
import "./Login.css"; // make sure to create this file

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <p className="subtitle">Please enter your details to continue</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "/dashboard";
          }}
        >
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

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don't have an account?{" "}
          <a href="/signup">Create an account</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
