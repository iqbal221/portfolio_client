import React from "react";
import { Link } from "react-router-dom";
import home from "../../../Assets/images/projects/pic.png";
import BannerAnimation from "./BannerAnimation";

const Banner = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:mt-24 mt-14 gap-8">
        <div className="mx-auto md:my-auto">
          <div className="md:px-0 px-4 lg:pl-24 lg:pr-8">
            <h1 className="md:text-5xl text-3xl font-bold m-0 p-0">
              Hello! I am
            </h1>
            <h1 className="md:text-5xl text-3xl font-bold mt-2 p-0">
              Md Zahed Iqbal{" "}
            </h1>
            <span className="text-warning text-xl">
              <BannerAnimation></BannerAnimation>
            </span>{" "}
            <p className="lg:pr-4">
              Programming is my passion. I am developing my skills in every day.
            </p>
            <a
              className="btn btn-primary text-black px-5 mt-4 text-md"
              href="https://drive.google.com/file/d/17nN9Av-9BmPWKMbnGR07TogOlDG8dVIu/view?usp=sharing"
              rel="noopener"
              target="_blank"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="mx-auto">
          <img
            src={home}
            className="rounded-full md:w-96 md:h-96 w-42 h-42 bg-blue-200  border-double border-green-500	 border-8"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
