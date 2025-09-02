// ****** Nested Loop in React JSX ******

/*
App.jsx file code:
import College from "./College";

function App() {
    const collegeData = [
        {
        name: "Aspire College",
        website: "www.aspirecollege.com",
        city: "Sialkot",
        student: [
            {
            name: "Ali",
            age: "28",
            email: "ali@aspirecollege.com"
            },
            {
            name: "Salman",
            age: "26",
            email: "salman@aspirecollege.com"
            },
            {
            name: "Fiaz",
            age: "26",
            email: "Fiaz@aspirecollege.com"
            }

        ]
        },
        {
        name: "Superior College",
        website: "www.superiorcollege.com",
        city: "Lahore",
        student: [
            {
            name: "Ahmed",
            age: "26",
            email: "ahmed@superiorcollege.com"
            },
            {
            name: "Ahsan",
            age: "29",
            email: "ahsan@superiorcollege.com"
            },
            {
            name: "Asim",
            age: "30",
            email: "asim@superiorcollege.com"
            }

        ]
        },
        {
        name: "Punjab College",
        website: "www.punjabcollege.com",
        city: "Gujranwala",
        student: [
            {
            name: "Hashim",
            age: "25",
            email: "hashim@punjabcollege.com"
            },
            {
            name: "Ihtasham",
            age: "22",
            email: "Ihtasham@punjabcollege.com"
            },
            {
            name: "Umair",
            age: "23",
            email: "umair@punjabcollege.com"
            }

        ]
        }
    ]
    return (
        <div>
        <h1>Nested Loop In React</h1>
        {
            collegeData.map((college, index) => (
            <College key={index} college={college}/>
            ))
        }
        </div>
    )
}

export default App
*/

/*
College.jsx file code: 
import Student from "./Student";
function College({college}){
    console.log(college);
    return(
        <div style={{
            backgroundColor: "#ccc",
            color: "#000",
            padding: "20px",
            borderBottom: "2px solid #000",
            borderRadius: "10px",
            margin: "20px",
            width: "100%"
        }}>
            <h1>{college.name}</h1>
            
                <ul>
                    <li>
                        <h3>Name: {college.name}</h3>
                    </li>
                    <li>
                        <h3>City: {college.city}</h3>
                    </li>
                    <li>
                        <h3>Website: {college.website}</h3>
                    </li>
                    <li>
                        <Student student={college.student} />
                    </li>
                    
                </ul>
        </div>
    )
}
export default College;
*/

/*
Student.jsx file code:
function Students({student}){
    return(
        <div>
            <h3>Students:</h3>
                <ul>
                    {
                        student.map((student)=>(
                            <li>
                                <h4>Name: {student.name}</h4>
                                <h4>Age: {student.age}</h4>
                                <h4>Email: {student.email}</h4>
                            </li>
                    ))}
                </ul>
        </div>
    )
}
export default Students;
*/