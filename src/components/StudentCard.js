export const StudentCard = ({ student }) => {
    return (
      <div style={{
        background: 'white',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '1.5rem',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s'
      }}>
        <h3 style={{ 
          marginBottom: '0.5rem', 
          color: '#3498db' 
        }}>
          {student.name}
        </h3>
        <p style={{ margin: '0.25rem 0' }}>Email: {student.email}</p>
        <p style={{ margin: '0.25rem 0' }}>Course: {student.course}</p>
        <p style={{ margin: '0.25rem 0' }}>Age: {student.age}</p>
      </div>
    );
  };