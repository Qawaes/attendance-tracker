import React from 'react';

function Student({ student, onToggle }) {
  return (
    <li
    className= {`student-card ${student.present ? 'present' : 'absent'}`}
   
    >
      {student.name}
      <button  onClick={() => onToggle(student.id)} > Mark {student.present ? 'Absent' : 'Present'}
      </button>
      {/* <button onClick={() => onToggle(student.id)} > {`Mark ${' '}`}   
        {student.present ? 'Absent' : 'Present'}
      </button> */}
     
    </li>
  );
}

export default Student;
