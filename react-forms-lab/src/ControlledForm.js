import React, { useState } from 'react';
import axios from 'axios';

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    id: '', // Add the id field to the form
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.id) {
      // If id exists, perform a PUT request to update the user
      updateUser(formData.id, formData);
    } else {
      // If id does not exist, perform a POST request to create a new user
      createUser(formData);
    }
    // You can reset the form here if needed
    setFormData({
      id: '',
      name: '',
      email: '',
      message: '',
    });
  };

  const createUser = async (user) => {
    try {
      const response = await axios.post('http://localhost:3000/users', user);
      console.log('User created:', response.data);
      // Perform any additional actions after successful creation
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const updateUser = async (id, user) => {
    try {
      const response = await axios.put(`http://localhost:3000/users/${id}`, user);
      console.log('User updated:', response.data);
      // Perform any additional actions after successful update
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Function to handle the DELETE request
  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/users/${id}`);
      console.log('User deleted:', response.data);
      // Perform any additional actions after successful deletion
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          ID:
          <input type="text" name="id" value={formData.id} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Submit</button>
      {formData.id && (
        <button type="button" onClick={() => deleteUser(formData.id)}>
          Delete User
        </button>
      )}
    </form>
  );
};

export default ControlledForm;
