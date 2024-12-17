import React, { useState } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import "./RiskAssessment.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const RiskAssessment = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    strongPassword: "no",
    softwareUpdated: "no",
    phishingAware: "no",
    backup: "no",
  });

  const [score, setScore] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const calculateRisk = () => {
    let total = 0;
    if (answers.strongPassword === "yes") total += 25;
    if (answers.softwareUpdated === "yes") total += 25;
    if (answers.phishingAware === "yes") total += 25;
    if (answers.backup === "yes") total += 25;

    setScore(total);
  };

  const resetForm = () => {
    setAnswers({
      strongPassword: "no",
      softwareUpdated: "no",
      phishingAware: "no",
      backup: "no",
    });
    setScore(null);
  };

  return (
    <div className="risk-assessment">
      <Link onClick={() => navigate(-1)}>
        <ArrowLeft />
      </Link>
      <h1>Cybersecurity Risk Assessment</h1>
      <p>
        Answer the following questions to assess your cybersecurity risk level.
      </p>
      <form>
        <div className="question">
          <label>1. Do you use strong and unique passwords?</label>
          <select
            name="strongPassword"
            value={answers.strongPassword}
            onChange={handleChange}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <div className="question">
          <label>2. Is your software and operating system updated?</label>
          <select
            name="softwareUpdated"
            value={answers.softwareUpdated}
            onChange={handleChange}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <div className="question">
          <label>3. Are you aware of phishing attacks?</label>
          <select
            name="phishingAware"
            value={answers.phishingAware}
            onChange={handleChange}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <div className="question">
          <label>4. Do you back up your data regularly?</label>
          <select name="backup" value={answers.backup} onChange={handleChange}>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </form>
      <div className="actions">
        <button type="button" onClick={calculateRisk}>
          Assess Risk
        </button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </div>
      {score !== null && (
        <div className="results">
          <h2>Your Cybersecurity Risk Score: {score}%</h2>
          {score < 50 ? (
            <p className="low-score">
              High Risk: You need to improve your cybersecurity practices.
            </p>
          ) : score < 75 ? (
            <p className="medium-score">
              Moderate Risk: You're doing okay but there's room for improvement.
            </p>
          ) : (
            <p className="high-score">Low Risk: Great job! Keep it up.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default RiskAssessment;
