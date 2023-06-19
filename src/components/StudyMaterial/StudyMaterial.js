import React, { useState } from "react";
import './StudyMaterial.css';

const StudyMaterial = () => {
  const courses = [
    {
      id: 1,
      title: "Course 1",
      description: "This is the description for Course 1.",
      materials: [
        {
          id: 1,
          title: "Study Material 1",
          url: "https://example.com/study-material-1.pdf"
        },
        {
          id: 2,
          title: "Study Material 2",
          url: "https://example.com/study-material-2.pdf"
        }
      ]
    },
    {
      id: 2,
      title: "Course 2",
      description: "This is the description for Course 2.",
      materials: [
        {
          id: 3,
          title: "Study Material 3",
          url: "https://example.com/study-material-3.pdf"
        },
        {
          id: 4,
          title: "Study Material 4",
          url: "https://example.com/study-material-4.pdf"
        }
      ]
    }
  ];

  const [expandedCourseId, setExpandedCourseId] = useState(null);

  const toggleCourse = (courseId) => {
    setExpandedCourseId(courseId === expandedCourseId ? null : courseId);
  };

  return (
    <section id="studyStudyMaterial" className="studySection">
      <h1 className="studySection-title">Study Material</h1>
      {courses.map((course) => (
        <div key={course.id} className="studyCourse-container">
          <div className="studyCourse-header">
            <h2 className="studyCourse-title">{course.title}</h2>
            <button
              className={`studyCourse-toggle ${expandedCourseId === course.id ? 'expanded' : ''}`}
              onClick={() => toggleCourse(course.id)}
            >
              {expandedCourseId === course.id ? 'Hide' : 'Show'}
            </button>
          </div>
          <p className="studyCourse-description">{course.description}</p>
          {expandedCourseId === course.id && (
            <div className="studyCourse-content">
              <ul className="studyMaterial-list">
                {course.materials.map((material) => (
                  <li key={material.id} className="studyMaterial-item">
                    <a href={material.url} target="_blank" rel="noopener noreferrer" className="studyMaterial-link">
                      {material.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default StudyMaterial;


