import React from "react";
// import { CircularProgressbar } from "react-circular-progressbar";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Skills = () => {
  return (
    <div className="md:mt-28 mt-20">
      <h2 className="text-3xl font-bold text-white">My Skills</h2>
      <hr />
      <div className="grid lg:grid-cols-5  md:grid-cols-4 grid-cols-2 gap-6 mt-10">
        <div className="mx-auto mt-5">
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 90 }}
          >
            {90}%
          </div>
          <div className="text-center mt-2">HTML5</div>
        </div>
        <div className="mx-auto mt-5">
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 85 }}
          >
            {85}%
          </div>
          <div className="text-center mt-2">CSS3</div>
        </div>
        <div className="mx-auto mt-5">
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 95 }}
          >
            {95}%
          </div>
          <div className="text-center mt-2">BOOSTRAP5</div>
        </div>
        <div className="mx-auto mt-5">
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 80 }}
          >
            {80}%
          </div>
          <div className="text-center mt-2">TAILWIND CSS</div>
        </div>
        <div className="mx-auto mt-5">
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 70 }}
          >
            {70}%
          </div>
          <div className="text-center mt-2">JAVASCRIPT</div>
        </div>
        <div className="mx-auto mt-5">
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 70 }}
          >
            {70}%
          </div>
          <div className="text-center mt-2">REACT JS</div>
        </div>
        <div className="mx-auto mt-5">
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 80 }}
          >
            {80}%
          </div>
          <div className="text-center mt-2">NODE JS </div>
        </div>
        <div className="mx-auto mt-5">
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 75 }}
          >
            {75}%
          </div>
          <div className="text-center mt-2">EXPRESS JS </div>
        </div>
        <div className="mx-auto mt-5">
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 50 }}
          >
            {50}%
          </div>
          <div className="text-center mt-2">MONGO DB </div>
        </div>
        <div className="mx-auto mt-5">
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 60 }}
          >
            {60}%
          </div>
          <div className="text-center mt-2">FIREBASE </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
