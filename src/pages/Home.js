import { useStudents } from "../hooks/useStudents";
import { StudentList } from "../components/StudentList";
import { StudentForm } from "../components/StudentForm";
import { useAuth } from "../context/AuthContext";

export const Home = () => {
  const { students, loading, error, createStudent, filter, setFilter } = useStudents();
  const { currentUser } = useAuth();

  return (
    <div className="home-page">
      <h1>Student Dashboard</h1>
      <p>Welcome, {currentUser?.email}</p>
      
      <div className="dashboard-content">
        <div className="student-list-container">
          <StudentList
            students={students}
            loading={loading}
            error={error}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        
        <div className="student-form-container">
          <StudentForm onCreate={createStudent} />
        </div>
      </div>
    </div>
  );
};