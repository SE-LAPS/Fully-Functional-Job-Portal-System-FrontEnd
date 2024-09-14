import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/UpdateUser.css'; // Import the CSS file

const UpdateUser = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    role: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/users/${id}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [id]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/users/${id}`, userData);
      navigate('/admin_dashboard/registered_members');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="update-user-container">
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <label>Role</label>
        <input
          type="text"
          name="role"
          value={userData.role}
          onChange={handleChange}
          required
        />
        <div>
          <button type="submit" className="update-button">Update</button>
          <button type="button" onClick={() => navigate('/register-members')} className="cancel-button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
