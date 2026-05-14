import React, { useState} from 'react';
import {useNavigate} from 'react-router-dom'
import './Register.css';

const Register = () => {
  const [formValues, setFormValues] = useState({ role: '', name: '', dob: '', mobile: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));//prev states here that, whatever the previous values of formvalues will spread here using spread operator.
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formValues.role || !formValues.name || !formValues.dob || !formValues.mobile || !formValues.password) {
      setError('All fields are required.');
      return;
    }
    setError('');
    setLoading(true);
    
    //Send data to the backend:
    try {
        const responce = await fetch(`${import.meta.env.VITE_API_URL || 'https://healing-touch-1.onrender.com'}/user/register`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                role:formValues.role,
                name:formValues.name,
                dob:formValues.dob,
                mobile:formValues.mobile,
                password:formValues.password
            })
        });

        const data = await responce.json();
        if(responce.ok){
            alert('Registration successful');

            setFormValues({
                role:"",
                name:"",
                dob:"",
                mobile:"",
                password:""
            });

            //redirect to the login page after a short delay.
            setTimeout(()=>{
                navigate("/login");
            },1500);
        } else {
            // Handle error responses
            setError(data.message || 'Registration failed');
        }
        
    } catch (error) {
        console.log(`registration error:${error.message}`);
        setError('Network error. Please try again.');
    }finally{
        setLoading(false)
    }
    
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-card__topbar" />
        <div className="register-card__header">
          <h2>Join Healing Touch</h2>
          <p>Create your account to get started</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
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
              placeholder="Your full name"
            />
          </label>

          <label>
            Date of Birth
            <input
              type="date"
              name="dob"
              value={formValues.dob}
              onChange={handleChange}
            />
          </label>

          <label>
            Mobile Number
            <input
              type="tel"
              name="mobile"
              value={formValues.mobile}
              onChange={handleChange}
              placeholder="Your mobile number"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder="Create a password"
            />
          </label>

          {error && <div className="register-error">{error}</div>}

          <button type="submit" className="register-submit" disabled={loading}>
            {loading ? "Registering...": "Register"}
          </button>
        </form>

        <div className="register-card__footer">
          <span>Already have an account? <a href="/login">Login</a></span>
        </div>
      </div>
    </div>
  );
};

export default Register;
