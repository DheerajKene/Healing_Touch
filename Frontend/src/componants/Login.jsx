import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formValues, setFormValues] = useState({ role: '', name: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValues.role || !formValues.name || !formValues.password) {
      setError('All fields are required.');
      return;
    }

    setError('');
    alert(`Logged in as ${formValues.name} (${formValues.role})`);
    setFormValues({ role: '', name: '', password: '' });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-card__topbar" />
        <div className="login-card__header">
          <h2>Welcome Back</h2>
          <p>Sign in to continue with Healing Touch</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Role
            <select name="role" value={formValues.role} onChange={handleChange}>
              <option value="">Select a role</option>
              <option value="user">User</option>
              <option value="caregiver">Caregiver</option>
              <option value="admin">Admin</option>
            </select>
          </label>

          <label>
            Name
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder="Your password"
            />
          </label>

          {error && <div className="login-error">{error}</div>}

          <button type="submit" className="login-submit">
            Login
          </button>

          <div className="login-register-link">
            Don't have an account? <a href="/register">Register</a>
          </div>
        </form>

        <div className="login-card__footer">
          <span>Secure access for patients and caregivers.</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
