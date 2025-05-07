import Student from './Student'; 

function StudentList({ students, onToggle }) {
  return (
    <div>
      <ul>
        {students.map(student => (
          <Student 
            key={student.id} 
            student={student} 
            onToggle={onToggle} 
          />
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
