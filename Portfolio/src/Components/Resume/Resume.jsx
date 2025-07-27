import React from "react";
import resume from "../Resume/Resume.png";
import { BsDownload } from "react-icons/bs";

const download = () => {
  const link = document.createElement("a");
  link.href = "/Resume.pdf";
  link.download = "HarshitaRajoria_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Resume() {
  return (
    <div className="h-screen p-10 text-center flex flex-col items-center">
      <div className="  mb-6  px-4 py-2 rounded-md ">Resume</div>

      <div className="ResumeContents flex flex-col items-center">
        <img
          src={resume}
          alt="Resume Preview"
          className="border rounded-lg shadow-xl max-w-full  w-2/3 "
        />
        <button 
          onClick={download}
          className="border p-2  rounded-lg shadow-xl m-6 flex flex-row">
          Download pdf
          <BsDownload className="text-xl ml-3" />
        </button>
      </div>
    </div>
  );
}
