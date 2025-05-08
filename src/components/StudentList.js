import { StudentCard } from './StudentCard';

export const StudentList = ({ students, loading, error, filter, setFilter }) => {
  if (loading) return <p>Loading students...</p>;
  if (error) return <p style={{ color: '#e74c3c' }}>Error: {error}</p>;

  return (
    <div style={{ width: '100%' }}>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Filter by course..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '1rem'
          }}
        />
      </div>
      {students.length === 0 ? (
        <p>No students found</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginTop: '1rem'
        }}>
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}
    </div>
  );
};