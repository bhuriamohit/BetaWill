import React, { useState ,useEffect } from "react";
import "./Mycourses.css";
import { useNavigate } from "react-router-dom";
const Mycourses=  (props) => {
  const [showForm, setShowForm] = useState(false);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [admin,setadmin]=useState(false)
  const [courses, setCourses] = useState([
    
  ]);

  const navigate=useNavigate()

  const watch=(topic)=>
  {
      navigate('/lecturepage',{state:{topic:topic}})
  }
  let farr=[]
 async function synccourses()
  {
    let result;
        fetch("http://localhost:8080/mycourses/"+props.email)
        .then(async (response)=>
        {
            result=await response.json();
            setCourses(result.mycourses)
            
        })
  }
  useEffect(() => {
    // Function to be called on component mount or re-render
    synccourses()
  }, []);
  console.log(courses)
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const addCourse = async (event) => {
    event.preventDefault();

    const newCourse = {
      heading: courseTitle,
      description: courseDescription,
      enrollLink: "https://example.com",
    };
    await fetch('http://localhost:8080/addcourses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCourse)
      })
        .then(async (response) => {
         let result= await  response.json();
          console.log(result)
        })
        .catch((error) => {
          console.log('Error submitting signup form:', error);
        });
    setCourses([...courses, newCourse]);
    setCourseTitle("");
    setCourseDescription("");
    toggleForm();
  };
  
  return (
    
    <section id='courses' className="section">

    <div>
      <div className="myc">My Courses</div>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div
            key={index}
            className="course-item"
          >
            <div>
              <h3 className="course-heading">{course.heading}</h3>
              <p className="course-description">{course.description}</p>
            </div>
            <button
              className="enroll-link"
              onClick={()=>watch(course.heading)}
            >
              Watch now
            </button>
          </div>
        ))}
      </div>
{admin==true && 
<button className="add-course-button" onClick={toggleForm}>
  Add Course
</button>
}

{showForm && (
  <form className="course-form" onSubmit={addCourse}>
    <input
      className="course-input"
      type="text"
      placeholder="Course Title"
      value={courseTitle}
      onChange={(e) => setCourseTitle(e.target.value)}
    />
    <textarea
      className="course-textarea"
      placeholder="Course Description"
      value={courseDescription}
      onChange={(e) => setCourseDescription(e.target.value)}
    />
    <button className="submit-button" type="submit">
      Submit
    </button>
  </form>
)}
    </div>
    </section>

  );
};

export default Mycourses;