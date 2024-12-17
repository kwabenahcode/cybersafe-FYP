import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../../Components/Navbar/Header";
import Footer from "../../Components/Footer/Footer";
import padlock from "../../Images/homeImages/padlock.png";

function Tips() {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/tips/");
        const data = await response.json();
        if (data.status === "Success") {
          setTips(data.details);
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
    <div>
      <Header />
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
              {tips.map((tip, index) => (
                <div key={index} className="card-flex">
                  <div>
                    <img
                      src={tip.image}
                      alt={tip.name}
                      className="padlock-img"
                    />
                  </div>
                  <div>
                    <div className="card-title">{tip.title}</div>
                    <div className="card-body">{tip.context}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Tips;
