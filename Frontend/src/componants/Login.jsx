import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formValues, setFormValues] = useState({ role: '', name: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formValues.role || !formValues.name || !formValues.password) {
      setError('All fields are required.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://healing-touch-1.onrender.com'}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          role: formValues.role,
          name: formValues.name,
          password: formValues.password
        })
      });

      const data = await response.json();
      if (response.ok) {
        alert('Login successful');
        // Store token if needed
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
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

          <button type="submit" className="login-submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="login-register-link">
            Don't have an account? <Link to="/register">Register</Link>
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
