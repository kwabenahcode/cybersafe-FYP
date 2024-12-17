import React, { useEffect, useState } from "react";
import Header from "../../Components/Navbar/Header";
import vidimg from "../../Images/homeImages/imgFive.png";
import imgvid from "../../Images/homeImages/vid-img.png";
import secu from "../../Images/homeImages/secu.png";
import "./courses.css";
import { Container } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import codeaca from "../../Images/homeImages/codeaca.png";
import risk from "../../Images/homeImages/risk.jpg";
import sec from "../../Images/homeImages/sec.jpg";

function Courses() {
  const [courses, setCourses] = useState([""]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/courses/");
        const data = await response.json();
        if (data.status === "Success") {
          console.log(data);
          setCourses(data.details);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tips:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="div">
      <Header />
      <div className="courses-main-div">
        <Container>
          <h3>Current Courses</h3>
          <div className="courses-div-flex">
            <div className="courses-div">
              <img src={risk} alt="" className="vid-image" />
              <div>
                <h4 style={{ textDecoration: "underline" }}>
                  <a href="https://www.codecademy.com/learn/paths/cyber-resilience-risk-management">
                    Fundamentals of Cyber Resilience and Risk Management
                  </a>
                </h4>
                <p className="courses-p">
                  Cyber risk is everywhere and affects organizations as well as
                  individuals. Creating resilient practices, policies, and
                  procedures can protect you and your organization from
                  malicious attackers as well as human error. That being said,
                  there are trade offs to every decision, and risk management
                  techniques and analysis can help you make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="recommended-courses-div">
        <Container>
          <div>
            <h2>Recommended Courses</h2>
            <div className="recommended-flex">
              {courses.map((course, index) => (
                <div key={index} className="recommended-card">
                  <img src={course.image} alt="" className="vid-image" />
                  <div>
                    <h5
                      style={{ color: "#1180CB", textDecoration: "underline" }}
                    >
                      <a href={course.link} target="blank">
                        {course.name}
                      </a>
                    </h5>
                    <p className="recommended-p">{course.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
