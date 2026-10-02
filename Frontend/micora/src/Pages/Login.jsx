
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h1>Welcome Back</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = "/dashboard";
        }}
      >
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
          Login
        </button>
      </form>

      <p>
        Don't have an account?{" "}
        <a href="/signup">Create an account</a>
      </p>
    </div>
  );
}

export default Login;
```