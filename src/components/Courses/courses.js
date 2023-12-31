import React, { useState, useEffect } from "react";
import "./courses.css";
import { useNavigate ,useLocation} from "react-router-dom";
const Courses = (prop) => {

  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [admin, setadmin] = useState(false)
  const location = useLocation();
  const useremail = localStorage.getItem('useremail');
  const [mycourses, setmycourses] = useState([])
  const [courses, setCourses] = useState([
    // {
    //   heading: "Course 1",
    //   description: "This is the description of Course 1",
    //   enrollLink: "https://example.com/course1",
    // },
    // {
    //   heading: "Course 2",
    //   description: "This is the description of Course 2",
    //   enrollLink: "https://example.com/course2",
    // },
    // {
    //   heading: "Course 3",
    //   description: "This is the description of Course 3",
    //   enrollLink: "https://example.com/course3",
    // },
    // {
    //   heading: "Course 4",
    //   description: "This is the description of Course 4",
    //   enrollLink: "https://example.com/course4",
    // },
    // {
    //   heading: "Course 5",
    //   description: "This is the description of Course 5",
    //   enrollLink: "https://example.com/course5",
    // },
  ]);
  let farr = []
  async function synccourses() {
    let result;
    fetch("https://betawill-com.onrender.com/allcourses")
      .then(async (response) => {
        result = await response.json();
        setCourses(result)
        if(useremail!=null)
        {

          await fetch("https://betawill-com.onrender.com/mycourses/" + useremail)
            .then(async (response) => {
              response = await response.json()
              response = response.mycourses;
              let temp=[]
              for (let i = 0; i < response.length; i++) {
                console.log(response[i].heading)
                temp.push(response[i].heading);
  
  
  
              }
              setmycourses(temp)
  
            })
        }

      })
  }
  
  useEffect(() => {
    // Function to be called on component mount or re-render
    console.log(prop.data)
    synccourses()
    
    // fetchmycourses(prop.data)
  }, []);
  console.log(courses)
  const toggleForm = () => {
    setShowForm(!showForm)
  };

  const addCourse = async (event) => {
    event.preventDefault();

    const newCourse = {
      heading: courseTitle,
      description: courseDescription,
      enrollLink: "https://example.com",
    };
    await fetch('https://betawill-com.onrender.com/addcourses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCourse)
    })
      .then(async (response) => {
        let result = await response.json();
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

  const gotocoursedescription = (title) => {
    navigate('/coursedescription',
      {
        state: {
          coursedescription: title,
          useremail: prop.data
        }
      })
  }

  const watchlecture=(topic)=>
  {
    navigate('/lecturepage',{state:{topic:topic}})
  }
  return (
    <section id='courses' className="section">

      <div>

        {/* <h1 className="courses-heading">Courses</h1> */}
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
              {
                mycourses.indexOf(course.heading) != -1 ?
                  <button
                    className="enroll-link"
                    onClick={() => watchlecture(course.heading)}
                  >
                    Watch Now
                  </button> :
                  <button
                    className="enroll-link"
                    onClick={() => gotocoursedescription(course.heading)}
                  >
                    Enroll Now
                  </button>
              }
            </div>
          ))}
        </div>
        {admin == true &&
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

export default Courses;