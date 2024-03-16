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
          console.log("SUCCESS!");
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
      <div className="flex flex-col md:flex-row justify-center items-center z-[20] w-full h-auto px-40 gap-40">
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />

        <form
          ref={form}
          onSubmit={sendEmail}
          class="max-w-md mx-auto min-w-[30%]"
        >
          <div class="mb-4">
            <label for="name" class="block font-bold mb-1">
              Name:
            </label>
            <input
              id="name"
              type="text"
              name="user_name"
              required
              class="w-full px-3 py-2 rounded-md text-black outline-none"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block font-bold mb-1">
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="user_email"
              required
              class="w-full px-3 py-2 border rounded-md text-black outline-none"
            />
          </div>
          <div class="mb-4">
            <label for="message" class="block font-bold mb-1">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              class="w-full px-3 py-2 border rounded-md h-32 text-black outline-none"
            />
          </div>
          <button
            type="submit"
            class="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>
        <div className="min-w-[350px] w-[50%]">
          <b>If you have any questions, inquiries, or would like to discuss a
          project, feel free to reach out to me through any of the following
          channels:</b> <br />
          <br />
          <b>Email:</b> shivranjanbharadwaj@gmail.com <br />
          <b>Phone:</b> +91 9827626647 <br />
          <b>Availability:</b> Currently accepting new projects. <br /> <br />
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
