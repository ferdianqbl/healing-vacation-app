import React from "react";
import "./Step.css";
import StepImgAndOverlay from "./step-and-overlay.png";
// import StepImg from "./step.png";
// import stepImgOverlay from "./overlay-bg.png";
import stepJson from "../../json/step.json";

const Step = () => {
  const [step, setStep] = React.useState(1);

  const stepHandler = (numberOfStep) => {
    setStep(numberOfStep);
  };

  return (
    <section className="step position-relative" id="step">
      {/* <img src={stepImgOverlay} alt="" className="img-fluid step-img-overlay" /> */}
      <div className="row align-items-center justify-content-between position-relative">
        <div className="col-md-6 step-item-group">
          <h1 className="step-title">Cara Kerja</h1>
          {stepJson.map((item, index) => (
            <div className="step-item" key={new Date() + index * 100000 * 999}>
              <div
                className={`step-item-number${
                  step === item.step ? " active" : ""
                }`}
                onClick={() => stepHandler(item.step)}
              >
                <span>{item.step}.</span>
              </div>
              <div
                className={`step-item-text${
                  step === item.step ? " d-block" : " d-none"
                }`}
              >
                <p className="step-item-title">{item.title}</p>
                <p className="step-item-body">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-5 d-none d-md-block">
          <img
            src={StepImgAndOverlay}
            alt=""
            className="img-fluid step-img-and-overlay"
          />
        </div>
      </div>
    </section>
  );
};

export default Step;
