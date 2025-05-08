import { useState } from 'react';
import { toast } from 'react-toastify';

export const StudentForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.course || !formData.age) {
      toast.error('All fields are required');
      return;
    }

    if (!formData.email.includes('@')) {
      toast.error('Please enter a valid email');
      return;
    }

    const success = await onCreate(formData);
    if (success) {
      setFormData({ name: '', email: '', course: '', age: '' });
      toast.success('Student added successfully!');
    }
  };

  const formGroupStyle = {
    position: 'relative',
    marginBottom: '1.5rem'
  };

  const labelStyle = (value) => ({
    position: 'absolute',
    top: value ? '-0.8rem' : '50%',
    left: '0.75rem',
    fontSize: value ? '0.75rem' : '1rem',
    background: 'white',
    color: '#000',
    padding: '0 0.25rem',
    transform: value ? 'translateY(0)' : 'translateY(-50%)',
    transition: 'all 0.2s ease',
    pointerEvents: 'none'
  });

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '1rem',
    backgroundColor: 'white',
    color: 'black',
    outline: 'none'
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '0 auto',
      padding: '2rem',
      background: 'white',
      borderRadius: '10px',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <h3 style={{
        marginBottom: '2rem',
        color: 'black',
        textAlign: 'center',
        fontSize: '1.5rem'
      }}>
        Add New Student
      </h3>
      <form onSubmit={handleSubmit}>

        <div style={formGroupStyle}>
          <label style={labelStyle(formData.name)}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle(formData.email)}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle(formData.course)}>Course</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            style={{ ...inputStyle, appearance: 'none' }}
          >
            <option value=""></option>
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Electronics & Communication">Electronics & Communication</option>
            <option value="Chemical Engineering">Chemical Engineering</option>
          </select>
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle(formData.age)}>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="16"
            style={inputStyle}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1rem'
          }}
        >
          Add Student
        </button>
      </form>
    </div>
  );
};
