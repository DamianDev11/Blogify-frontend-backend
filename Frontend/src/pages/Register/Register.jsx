import { useState } from "react";
import { useNavigate } from "react-router-dom";
import registerStyle from "./Register.module.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [error, setError] = useState("");
  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    // Validate email format
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const addUser = { name, email, password, profilePic };

    const response = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (response.ok) {
      console.log(result);
      navigator("/login");
    } else {
      console.log(result.error);
      setError(result.error);
    }
  };

  return (
    <div className={registerStyle.container}>
      <div className={registerStyle.registerContent}>
        {error && <div className="alert alert-danger">{error}</div>}
        <h2 className={registerStyle.signupHeading}>Register here</h2>

        <form onSubmit={handleSubmit} className={registerStyle.formGroup}>
          <div className="mb-3">
            <label className={registerStyle.formLabel}>Name</label>
            <input
              type="text"
              className={registerStyle.formInput}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className={registerStyle.formLabel}>Email address</label>
            <input
              type="email"
              className={registerStyle.formInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className={registerStyle.formLabel}>Password</label>
            <input
              type="password"
              className={registerStyle.formInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className={registerStyle.formLabel}>Profile Picture</label>
            <input
              type="text"
              className={registerStyle.formInput}
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
            />
          </div>
          <button type="submit" className={registerStyle.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
