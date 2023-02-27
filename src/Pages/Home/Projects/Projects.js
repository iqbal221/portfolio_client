import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://my-portfolio-server-iqbal221.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
    setLoading(false);
  }, []);

  return (
    <div className="md:mt-28 mt-20">
      <h2 className="text-3xl font-bold text-white">My Projects</h2>
      <hr />
      {loading ? (
        <div className="flex justify-center items-center mt-5">
          <ClipLoader
            color={"#36d7b7"}
            loading={loading}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-16">
          {projects?.map((project, i) => {
            return (
              <div
                key={project._id}
                className=" overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
              >
                <img
                  className="w-full h-44"
                  src={project.image}
                  alt="Article"
                />

                <div className="px-2 py-4">
                  <div>
                    <h3
                      href="#"
                      className="block  text-lg font-semibold text-warning transition-colors duration-300 transform"
                    >
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                    <Link
                      to={`/projectDetails/${project._id}`}
                      className="btn btn-secondary btn-sm mt-4"
                    >
                      Project preview
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Projects;
