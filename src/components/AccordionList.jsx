import { useState } from "react";

function AccordionList({
  title,
  content1,
  content2,
  content3,
  content4,
  content5,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="border border-gray-300 rounded-lg w-[80vw] md:w-[70vw] lg:w-[70vw] xl:w-[70vw] 2xl:w-[70vw] shadow-xl"
      data-aos="zoom-in"
      data-aos-duration="900"
      data-aos-once="true"
    >
      <div
        className="flex justify-between items-center py-4 cursor-pointer select-none"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-medium pl-5 text-[#020181]">{title}</h2>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 mr-5 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="pl-5 pb-3 pr-3">
          <ul className="text-justify pr-5">
            <li>{content1}</li>
            <li>{content2}</li>
            <li>{content3}</li>
            <li>{content4}</li>
            <li>{content5}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default AccordionList;
