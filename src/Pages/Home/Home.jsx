import React from "react";
import { Button, Card, CardBody, CardTitle, Container } from "react-bootstrap";
import "./home.css";
import firstImg from "../../Images/homeImages/firstImg.jpeg";
import sec from "../../Images/homeImages/sec.jpg";
import Frame11 from "../../Images/homeImages/Frame 11.png";
import padlock from "../../Images/homeImages/padlock.png";
import load from "../../Images/homeImages/load.png";
import warning from "../../Images/homeImages/excli.png";
import vidimg from "../../Images/homeImages/vid-img.png";
import imgfive from "../../Images/homeImages/imgFive.png";
import trendartimg from "../../Images/homeImages/trendartimg.png";
import secu from "../../Images/homeImages/secu.png";
import Header from "../../Components/Navbar/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <Container className="home-first-session-main-div">
        <div className="home-fist-session">
          <h2>Comprehensive Cybersecurity Guidance for Everyone"</h2>
          <p className="first-session-p">
            In an increasingly connected world, protecting your personal
            information online is crucial. CyberSafe Hub provides you with the
            essential knowledge, tools, and resources to safeguard your digital
            life.
          </p>
          <Button className="getStarted_btn">Get Started</Button>
        </div>
        <div className="first-img-div">
          <img src={firstImg} alt="" className="first-img-div" />
        </div>
      </Container>

      <div className="second-section-main-div">
        <Container className="second-section-container">
          <div className="second-image-div">
            <img src={Frame11} alt="" className="second-image" />
          </div>
          <div>
            <div className="home-second-section">
              <h2>Discover Your Cybersecurity Strengths and Weaknesses</h2>
              <p className="second-session-p">
                How safe are you online? Find out with our quick and easy
                Personal Risk Assessment. In just a few minutes, you'll receive
                a clear overview of your cybersecurity strengths and areas for
                improvement, along with tailored tips to boost your online
                safety.
              </p>
              <Link to="/assessment">
                <Button className="risk_btn">Risk Assesment</Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Container className="section-three-container">
        <h2>Quick Tip for Staying Safe Online</h2>
        <p>
          Explore our most popular courses designed to improve your
          cybersecurity skills. <br />
          Start learning today and protect your digital life.
        </p>
        <div className="section-three-cards">
          <div>
            <div className="div-flex">
              <div className="card-flex">
                <div>
                  <img src={padlock} alt="" className="padlock-img" />
                </div>
                <div>
                  <div className="card-title">Always Use Strong Password</div>
                  <div className="card-body">
                    Always use strong, unique passwords for each of your
                    accounts. Avoid using easily guessable information like your
                    name or birthdate. Instead, create complex passwords with a
                    mix of letters, numbers, and special characters.
                  </div>
                </div>
              </div>

              <div className="card-flex">
                <div>
                  <img src={load} alt="" className="padlock-img" />
                </div>
                <div>
                  <div className="card-title">Update Software Regularly</div>
                  <div className="card-body">
                    Keep your software, including operating systems and
                    applications, up to date. Regular updates patch security
                    vulnerabilities and protect you from new threats.
                  </div>
                </div>
              </div>

              <div className="card-flex">
                <div>
                  <img src={warning} alt="" className="padlock-img" />
                </div>
                <div>
                  <div className="card-title">Be Wary of Phishing Emails</div>
                  <div className="card-body">
                    Keep your software, including operating systems and
                    applications, up to date. Regular updates patch security
                    vulnerabilities and protect you from new threats.
                  </div>
                </div>
              </div>

              <div className="card-flex">
                <div>
                  <img src={padlock} alt="" className="padlock-img" />
                </div>
                <div>
                  <div className="card-title">
                    Enable Two-Factor Authentication (2FA)
                  </div>
                  <div className="card-body">
                    Enhance your account security by enabling two-factor
                    authentication wherever possible. This adds an extra layer
                    of protection by requiring a second form of verification in
                    addition to your password.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="section-four-div">
        <Container>
          <h2>Featured Courses</h2>
          <p>
            Explore our most popular courses designed to improve your <br />
            cybersecurity skills. Start learning today and protect your digital
            life.
          </p>
          <div className="video-flex">
            <div className="video-card">
              <img src={vidimg} alt="" className="video-image" />
              <h5 style={{ color: "#1180CB", textDecoration: "underline" }}>
                <a href="https://www.codecademy.com/learn/introduction-to-cybersecurity">
                  Introduction to Cybersecurity By Codecademy
                </a>
              </h5>
              <p className="section-four-p">
                Learn the fundamentals of cybersecurity and protect yourself
                online. This beginner-friendly course covers essential topics
                like recognizing threats, creating strong passwords, and safe
                browsing practices.
              </p>
            </div>

            <div className="video-card">
              <img src={secu} alt="" className="video-image" />
              <h5 style={{ color: "#1180CB", textDecoration: "underline" }}>
                <a href="https://skillsbuild.org/college-students/digital-credentials/cybersecurity-fundamentals">
                  Cybersecurity Fundamentals - IBM
                </a>
              </h5>
              <p className="section-four-p">
                This badge earner demonstrates a foundational understanding of
                cybersecurity concepts, objectives, and practices. This includes
                cyber threat groups, types of attacks, social engineering, case
                studies, overall cyber security risk management strategies,
                cryptography, and common approaches that organizations take to
                prevent, detect, and respond to cyber attacks.
              </p>
            </div>

            <div className="video-card">
              <img src={sec} alt="" className="vid-image" />
              <h5 style={{ color: "#1180CB", textDecoration: "underline" }}>
                <a href="https://www.coursera.org/learn/cybersecurity-for-everyone">
                  Cybersecurity for Everyone
                </a>
              </h5>
              <p className="section-four-p">
                Cybersecurity affects everyone, including in the delivery of
                basic products and services. If you or your organization want to
                better understand how to address your cybersecurity, this is the
                course for you and your colleagues to take -- from seasoned
                professionals to your non-technical colleagues.
              </p>
            </div>
          </div>
        </Container>
        <Link to="/courses">
          <Button className="explore-course-btn">Explore Courses</Button>
        </Link>
      </div>

      <div className="section-five-div">
        <Container>
          <h3>Trending Articles</h3>
          <p className="p-section-five">
            Discover what's currently making waves in the world of
            cybersecurity. Stay informed about emerging threats, new
            technologies, and best practices."
          </p>
          <div className="resources-div">
            <div className="video-card-five">
              <img src={trendartimg} alt="" className="five-video-image" />
              <h5 style={{ color: "#1180CB", textDecoration: "underline" }}>
                <a href="https://cybervie.com/blog/top-10-cybersecurity-tips-everyone-should-know/">
                  Top 10 Cybersecurity Tips Everyone Should Know
                </a>
              </h5>
              <p className="section-five-p">
                In the digital age, Cybersecurity is not just a buzzword but a
                necessity. Everyday Internet users must know the Top 10
                Cybersecurity Tips.
              </p>
            </div>
            <div className="video-card-five">
              <img src={imgfive} alt="" className="five-video-image" />
              <h5 style={{ color: "#1180CB", textDecoration: "underline" }}>
                <a href="https://academic.oup.com/cybersecurity/article/7/1/tyab019/6382745?searchresult=1">
                  Cyberattacks, cyber threats, and attitudes toward
                  cybersecurity policies
                </a>
              </h5>
              <p className="section-five-p">
                In recent years, the increase in civilian exposure to
                cyberattacks has been accompanied by heightened demands for
                governments to introduce comprehensive cybersecurity policies.
              </p>
            </div>
          </div>
        </Container>
        <Link to="/resources">
          <Button className="explore-course-btn">Explore more Articles</Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
