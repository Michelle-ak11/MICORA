import { useState } from "react";


function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h1>Create your MICORA account</h1>
  

      <form  class="auth-form" onSubmit={(e) => {  e.preventDefault();
          window.location.href = "/dashboard"; }} >
        <input type="text" placeholder="Full Name"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          required
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          maxLength={16}
          required
        />

        <label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          Show Password
        </label>

        <button type="submit">
          Create Account
        </button>
      </form>

      <p>
        Already have an account?{" "}
        <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Signup;