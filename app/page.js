import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
export default function Home() {
  return (
    <main className="min-w-full overflow-hidden">
      <div className="flex mb-2">
        <iframe
          src="https://giphy.com/embed/s1JvHf7JPTtEdKe7Sb"
          width="180"
          height="180"
        ></iframe>
        <div className="min-w-[80vw] flex justify-evenly overflow-hidden">
          <iframe
            src="https://giphy.com/embed/ihNA2Ep5iKGJK9gOd5"
            width="100"
            height="100"
          ></iframe>
          <iframe
            src="https://giphy.com/embed/ihNA2Ep5iKGJK9gOd5"
            width="100"
            height="100"
          ></iframe>
          <iframe
            className="hidden sm:inline-block"
            src="https://giphy.com/embed/ihNA2Ep5iKGJK9gOd5"
            width="100"
            height="100"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <h1 className="text-5xl font-bold font-serif mb-2 max-w-[480px]">
          I'm Om Priya,{" "}
          <span className="text-[#884A39]">Full Stack Developer and</span>{" "}
          Undergrad Student
        </h1>
        <p className="font-medium max-w-[380px]">
          Hey, Namaste, Konnichiwa! I am Om from Bihar, India. I have a lot of
          interest in developing beautiful User-friendly Digital Experiences
          that makes sense.
        </p>
      </div>
      <div className="flex items-center justify-around flex-wrap">
        <iframe
          src="https://giphy.com/embed/DWaWnqZ5HZVvO"
          width="200"
          height="180"
        ></iframe>
        <div className="flex gap-4">
          <Link href={"https://twitter.com/just___op"}>
            <FaTwitter
              size={50}
              className="hover:text-blue-700 p-2 hover:rounded-2xl hover:border-2"
            />
          </Link>
          <Link href={"https://github.com/om-priya"}>
            <FaGithub
              size={50}
              className="hover:text-gray-950-700 p-2 hover:rounded-2xl hover:border-2"
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/om-priya-067825201/"}>
            <FaLinkedin
              size={50}
              className="hover:text-blue-700 p-2 hover:rounded-2xl hover:border-2"
            />
          </Link>
          <Link href={"https://www.instagram.com/i_am_ompriya/"}>
            <FaInstagram
              size={50}
              className="hover:text-pink-700 p-2 hover:rounded-2xl hover:border-2"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
