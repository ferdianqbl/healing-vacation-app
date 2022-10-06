import React from "react";

const Accordion = ({ title, body, index }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`flush-heading__${index}Accordion`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse__${index}Accordion`}
          aria-expanded="false"
          aria-controls={`flush-collapse__${index}Accordion`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`flush-collapse__${index}Accordion`}
        className="accordion-collapse collapse"
        aria-labelledby={`flush-heading__${index}Accordion`}
        data-bs-parent="#faq-accordion"
      >
        <div className="accordion-body">{body}</div>
      </div>
    </div>
  );
};

export default Accordion;
