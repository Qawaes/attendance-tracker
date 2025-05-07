import { useState } from 'react';
import StudentList from './StudentList';

function App() {
  const initialStudents = [
    { id: 1, name: 'Alice', present: false },
    { id: 2, name: 'Bob', present: false },
    { id: 3, name: 'Charlie', present: false },
    { id: 4, name: 'Diana', present: false },
  ];

  const [students, setStudents] = useState(initialStudents);

  const toggleAttendance = (id) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, present: !student.present } : student
    ));
  };

  const resetAttendance = () => {
    setStudents(students.map(student => ({
      ...student,
      present: false
    })));
  };

  const presentCount = students.filter(s => s.present).length;
  const absentCount = students.length - presentCount;

  return (
    <div className="container">
      <h1>🏫 Attendance Tracker</h1>
      <div className='summary'>
      <p>Present: {presentCount}/{students.length}</p>
      {/* <p>Absent: {absentCount}</p> */}
      </div>
      <button className='reset-button' onClick={resetAttendance}>Reset Attendance</button>
     
      <StudentList students={students} onToggle={toggleAttendance} />
      
    </div>
  );
}

export default App;
