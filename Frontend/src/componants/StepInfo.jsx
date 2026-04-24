import React from "react";
import "./stepinfo.css";
import { FaPhoneAlt, FaUsers, FaHandHoldingHeart } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    title: "On-call consultation within 10 minutes",
    description:
      "Our dedicated care expert will attentively understand your needs and requirements to provide you with superior home care services.",
  },
  {
    id: 2,
    icon: <FaUsers />,
    title: "Choose from provided profiles",
    description:
      "Please review the matching profiles and select the best option to ensure faster caregiver allocation.",
  },
  {
    id: 3,
    icon: <FaHandHoldingHeart />,
    title: "Personalized service assignment",
    description:
      "Based on your needs, our expert assigns a caregiver or nurse to deliver high-quality home care services.",
  },
];

const StepInfo = () => {
  return (
    <div className="steps-container">
      <h2>
        Level up your home healthcare service with{" "}
        <span>3 easy steps</span>
      </h2>

      <div className="steps-wrapper">
        {steps.map((step) => (
          <div className="step-card" key={step.id}>
            <div className="step-number">{step.id}</div>
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepInfo;