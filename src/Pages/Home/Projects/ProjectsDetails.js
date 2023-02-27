import React from "react";
import { useLoaderData } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";

const ProjectsDetails = () => {
  const projectsDetails = useLoaderData();
  console.log(projectsDetails);
  const { name, images, features, live, client, server } = projectsDetails;

  return (
    <div>
      <h2 className="text-2xl text-warning my-8 text-center">
        Project-<span className="text-primary">{name}</span>
      </h2>
      <div className="grid max-w-4xl md:grid-cols-2 grid-cols-1 gap-3 mx-auto">
        <img className="h-52" src={images.image1} alt="" />
        <img className="h-52" src={images.image2} alt="" />
      </div>
      <div class="max-w-4xl mx-auto mt-5 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="p-8">
          <div>
            <h4 className="text-gray-800 text-xl font-bold">Features:</h4>
            <hr />
            <div className="flex items-center mt-8">
              <BsArrowRightCircle className="text-2xl text-warning md:ml-3" />
              <p class=" text-lg ml-3 text-gray-600">{features.one}</p>
            </div>
            <div className="flex items-center mt-4">
              <BsArrowRightCircle className="text-2xl text-warning md:ml-3" />
              <p class=" text-lg ml-3 text-gray-600">{features.two}</p>
            </div>
            <div className="flex items-center mt-4">
              <BsArrowRightCircle className="text-2xl text-warning md:ml-3" />
              <p class=" text-lg ml-3 text-gray-600">{features.three}</p>
            </div>
          </div>

          <div class="mt-8">
            <a href={live} rel="noopener" target="_blank">
              <button className="btn btn-secondary btn-sm px-5 mr-2">
                live
              </button>
            </a>
            <a href={client} rel="noopener" target="_blank">
              <button className="btn btn-info btn-sm mr-2">client</button>
            </a>
            <a href={server} rel="noopener" target="_blank">
              <button className="btn btn-warning btn-sm">server</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
