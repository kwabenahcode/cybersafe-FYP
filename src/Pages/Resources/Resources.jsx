import React, { useEffect, useState } from "react";
import Header from "../../Components/Navbar/Header";
import vidimg from "../../Images/homeImages/imgFive.png";
import imgvid from "../../Images/homeImages/vid-img.png";
import "./resources.css";
import { Container } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";

function Resources() {
  const [articles, setArticles] = useState([""]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/articles/");
        const data = await response.json();
        if (data.status === "Success") {
          setArticles(data.details);
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
          <h3>Current Resources</h3>
          <div className="courses-div-flex">
            <div className="courses-div">
              <img src={vidimg} alt="" />
              <div>
                <h4>Introduction to Cybersecurity</h4>
                <p className="courses-p">
                  Learn the fundamentals of cybersecurity and protect yourself
                  online. This beginner-friendly course covers essential topics
                  like recognizing threats, creating strong passwords, and safe
                  browsing practices.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="recommended-courses-div">
        <Container>
          <div>
            <h2>Recommended Resources</h2>
            <div className="recommended-flex">
              {articles.map((article, index) => (
                <div key={index} className="recommended-card">
                  <img src={imgvid} alt="" />
                  <div>
                    <h5
                      style={{ color: "#1180CB", textDecoration: "underline" }}
                    >
                      <a href={article.link} target="blank">
                        {article.name}
                      </a>
                    </h5>
                    <p className="recommended-p">{article.body}.</p>
                  </div>
                </div>
              ))}{" "}
              {/* ?: <p>No data</p> */}
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Resources;
