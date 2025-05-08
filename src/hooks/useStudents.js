import { useState, useEffect } from "react";
import { getStudents, addStudent } from "../services/students";

export const useStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getStudents();
        setStudents(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const createStudent = async (student) => {
    try {
      const newStudent = await addStudent(student);
      setStudents([...students, newStudent]);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  const filteredStudents = filter
    ? students.filter((student) =>
        student.course.toLowerCase().includes(filter.toLowerCase())
      )
    : students;

  return {
    students: filteredStudents,
    loading,
    error,
    createStudent,
    setFilter,
    filter
  };
};