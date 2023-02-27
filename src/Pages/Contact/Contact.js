import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jpawu1c",
        "template_3yipeep",
        form.current,
        "user_iT4rjjIubf9xtNhDpO2CL"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("successfull");
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("Message send successfully");
  };
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center text-white dark:text-white mt-16">
        Get in touch
      </h2>
      <div className="lg:flex md:flex flex-col justify-center items-center mt-6">
        <div>
          <img
            className="w-96 h-72"
            src="https://waytoxl.com/wp-content/uploads/2020/11/contact-us.png"
            alt=""
          />
        </div>
        <div className="w-full max-w-2xl px-6 py-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-10">
          <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
            <Link
              href="#"
              className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-300 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>

              <span className="mt-2">Bangladesh</span>
            </Link>

            <Link
              href="#"
              className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-300 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>

              <span className="mt-2">+01819832618</span>
            </Link>

            <Link
              href="#"
              className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-300 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>

              <span className="mt-2">zahediiuc221@gmail.com</span>
            </Link>
          </div>

          <div className="mt-6 ">
            <form ref={form} onSubmit={sendEmail}>
              <div className="items-center -mx-2 md:flex">
                <div className="w-full mx-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  >
                    Name
                  </label>

                  <input
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="text"
                    name="name"
                  />
                </div>

                <div className="w-full mx-2 mt-4 md:mt-0">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  >
                    E-mail
                  </label>

                  <input
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="email"
                    name="email"
                  />
                </div>
              </div>

              <div className="w-full mt-4">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                >
                  Message
                </label>

                <textarea
                  name="message"
                  type="text"
                  className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                ></textarea>
              </div>

              <div className="flex justify-center mt-6">
                <button type="submit" className="btn btn-secondary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
