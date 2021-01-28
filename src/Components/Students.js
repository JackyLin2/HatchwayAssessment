import React from 'react'

export default function Student(props){


    const displayStudents = (props) => {

        let {students} = props;
        
        if(students.length > 0){
            return(
                students.map((student, index) => {

                    const gradeInt = (student.grades)
                    let total = 0
                    for(let i=0; i <gradeInt.length; i++){
                        total += Number(gradeInt[i])
                    }
                    var avg = total / gradeInt.length
                    console.log(avg)
                 


                   return ( <div key={student.id}> 
                        <img src={student.pic} alt=""/>
                        <h3> {student.firstName} {student.lastName}</h3> 
                        <p> Email: {student.email}</p>
                        <p> Company: {student.company}</p>
                        <p> Skill: {student.skill}</p>
                           
                        <p> Average: {avg}%</p>
                    </div>
                    )
                })
            )
        } else {
            return (<h3>No Students Available </h3>)
        }
    }
    return (
        <div>
            {displayStudents(props)}
        </div>
    )


}

