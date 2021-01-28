import React, { useEffect, useState } from 'react'
import axios from "axios";
import Student from './Components/Students'

function App() {
  const [students, getStudents] = useState('')

  useEffect(() => {
    getAllStudents();
  }, [])


  const getAllStudents = () => {
    axios.get("https://api.hatchways.io/assessment/students").then(response => {
      const allStudents = response.data.students;
        getStudents(allStudents);
    }).catch(error => console.error(`Error: ${error}`))
  }

  return (
    <div>
        <Student students={students}/>
    </div>
  );
}

export default App;
