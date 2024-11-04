"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_34xgx3v", "template_3kkfucq", form.current, {
        publicKey: "NOvswO86buoLe_GPt",
      })
      .then(
        () => {
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex flex-col relative items-center justify-center min-h-screen w-full h-full mb-40">
      <h1 className="text-[40px] z-20 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Connect with me
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center z-[20] w-full h-auto px-6 md:px-20 lg:px-40 gap-10 md:gap-20 lg:gap-40">
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-lg md:min-w-[30%] p-6"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block font-bold mb-1 text-gray-400"
            >
              Name:
            </label>
            <input
              id="name"
              type="text"
              name="user_name"
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 text-white outline-none focus:border-blue-500 bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-bold mb-1 text-gray-400"
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="user_email"
              required
              className="w-full px-3 py-2 border rounded-md border-gray-300 text-white outline-none focus:border-blue-500 bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block font-bold mb-1 text-gray-400"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full px-3 py-2 border rounded-md h-32 border-gray-300 text-white outline-none focus:border-blue-500 bg-transparent"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>

        <div className="w-full md:min-w-[350px] md:w-[50%] text-white">
          <b>
            If you have any questions, inquiries, or would like to discuss a
            project, feel free to reach out to me through any of the following
            channels:
          </b>
          <br />
          <br />
          <b>Email:</b> shivranjanbharadwaj@gmail.com <br />
          <b>Phone:</b> +91 9827626647 <br />
          <b>Availability:</b> Currently accepting new projects. <br />
          <br />
          Looking forward to connecting with you!
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
