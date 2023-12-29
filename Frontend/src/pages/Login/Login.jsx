import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../features/authSlice";
import loginStyle from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!email.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    const addUser = { email, password };

    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (response.ok) {
      dispatch(setToken(result.token));
      dispatch(setUser(result.user));
      Navigate("/all");
    } else {
      console.log(result);
      setError(result.error);
    }
  };

  return (
    <div className={loginStyle.loginContainer}>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className={loginStyle.loginContent}>
        <h2 className={loginStyle.signupHeading}>Login here</h2>

        <form onSubmit={handleSubmit} className={loginStyle.formGroup}>
          <div className="mb-3">
            <label className={loginStyle.formLabel}>Email address</label>
            <input
              type="email"
              className={loginStyle.formInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className={loginStyle.formLabel}>Password</label>
            <input
              type="password"
              className={loginStyle.formInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={loginStyle.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
