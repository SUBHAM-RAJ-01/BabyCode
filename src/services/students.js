import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios, { delayResponse: 500 });

let students = [
  { id: 1, name: "Sunny", email: "sunny@abc.com", course: "Electronics", age: 22 },
  { id: 2, name: "Trishir", email: "trishir@abc.com", course: "Computer Science", age: 22 },
  { id: 3, name: "Jain", email: "jain@abc.com", course: "Mechanical", age: 23 },
];

mock.onGet("/api/students").reply(200, students);

mock.onPost("/api/students").reply((config) => {
  const newStudent = JSON.parse(config.data);
  newStudent.id = students.length + 1;
  students.push(newStudent);
  return [201, newStudent];
});

export const getStudents = async () => {
  const response = await axios.get("/api/students");
  return response.data;
};

export const addStudent = async (student) => {
  const response = await axios.post("/api/students", student);
  return response.data;
};