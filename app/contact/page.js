"use client";
import { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <main className="min-h-[90vh] flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-8">
        <span className="text-[#884A39]">Contact</span> Me
      </h1>
      <form
        action="mailto:ompriya18153789@gmail.com"
        method="post"
        encType="text/plain"
        className="border-2 p-8 rounded-lg shadow-xl"
      >
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="name" className="font-semibold">
            Your Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="rounded-lg p-2"
            required
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="email" className="font-semibold">
            Your E-mail:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="rounded-lg p-2"
            required
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="message" className="font-semibold">
            Your Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            cols="30"
            required
            placeholder="Your Message.."
            className="rounded-lg p-2 "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="p-2 rounded-2xl border-2 hover:bg-[#884A39] hover:text-white bg-[#e7ddd2]"
        >
          Send Message
        </button>
      </form>
    </main>
  );
};

export default page;
