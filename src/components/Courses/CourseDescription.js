import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./CourseDescription.css"; // Import CSS file for styling

const CourseDescription = () => {
    const location = useLocation();
    let title;
    if (location.state != null) {
        title = location.state.coursedescription;
        localStorage.setItem('title', title)

    }
    else {
        title = localStorage.getItem('title');

    }

    useEffect(() => {
        title = localStorage.getItem('title')

        fetchdetails(title);
    }, []);

    const [information, setinformation] = useState({
        about: "Fetching.......",
        description: "Fetching..........",
        price: "Fetching.............."
    });

    const [showForm, setShowForm] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const fetchdetails = (title) => {
        let s = "http://localhost:8080/coursedetail/" + title;
        fetch(s)
            .then(async (resp) => {
                let fres = await resp.json();
                fres = fres.data;
                setinformation(fres);
                console.log(information);
            });
    };

    const handleBuyCourse = () => {
        setShowForm(true);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleProceedToPay = async (e) => {
        e.preventDefault();

        if (email && password) {
            setEmailValue(email);
            localStorage.setItem('title', title)
            setPasswordValue(password);
            doPayment();
        } else {
            alert("Please enter your email and password.");
        }
    };

    const doPayment = async () => {
        let fres;
        let formData = {
            course: title,
            email: email,
            password: password
        }
        await fetch('http://localhost:8080/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(async (response) => {
                fres = await response.json();

            })

        if (fres.presence == false) {
            alert("User is not present");

        }
        else if (fres.presence == true && fres.password == false) {
            alert("Incorrect Password");

        }
        else {
            if (fres.coursepresence == false) {
                alert("You have already bought this course")
            }
            else {
                let formData={
                    course:title,
                    email:email
                }
                await fetch('http://localhost:8080/addcoursetostudent', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                .then(async (response)=>
                {
                    response=await response.json();
                    if(response.status==true)
                    {
                        alert("Course is added successfully")
                    }
                })
            }
        }
    };

    return (
        <div className="course-description-container">
            <div className="content-container">
                <h2 className="course-name">Course Name: {title}</h2>
                <p className="about">About: {information.about}</p>
                <h2 className="price">Price: {information.price}</h2>
                {!showForm ? (
                    <button className="buy-button" onClick={handleBuyCourse}>
                        Buy Course
                    </button>
                ) : (
                    <div className="form-container">
                        <form className="payment-form">
                            <h3>Enter your details</h3>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    required
                                />
                            </div>
                            <button className="proceed-button" onClick={handleProceedToPay}>
                                Proceed to Pay
                            </button>
                        </form>
                    </div>
                )}
            </div>
            {emailValue && passwordValue && (
                <div className="payment-details">
                    <h4>Payment Details:</h4>
                    <p>Email: {emailValue}</p>
                    <p>Password: {passwordValue}</p>
                </div>
            )}
        </div>
    );
};

export default CourseDescription;
