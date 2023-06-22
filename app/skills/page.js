import SkillCard from "@/components/SkillCard";
export const metadata = {
  title: "Skills Page",
  description: "This showcases",
};
const obj = [
  {
    url: "/assets/HTML.png",
    text: "html logo",
    name: "HTML",
  },
  {
    url: "/assets/CSS.png",
    text: "css logo",
    name: "CSS",
  },
  {
    url: "/assets/JAVASCRIPT.png",
    text: "js logo",
    name: "JAVASCRIPT",
  },
  {
    url: "/assets/REACT.png",
    text: "react logo",
    name: "REACT",
  },
  {
    url: "/assets/TAILWIND CSS.png",
    text: "TAILWIND logo",
    name: "TAILWIND CSS",
  },
  {
    url: "/assets/NEXT.png",
    text: "nextjs logo",
    name: "NEXTJS",
  },
  {
    url: "/assets/GIT-GITHUB.png",
    text: "github logo",
    name: "GIT & GITHUB",
  },
  {
    url: "/assets/NODEJS.png",
    text: "nodejs logo",
    name: "NODEJS",
  },
  {
    url: "/assets/EXPRESS.png",
    text: "express logo",
    name: "EXPRESS",
  },
  {
    url: "/assets/MONGODB.png",
    text: "mongodb logo",
    name: "MONGODB",
  },
  {
    url: "/assets/MYSQL.png",
    text: "mysql logo",
    name: "MYSQL",
  },
  {
    url: "/assets/PYTHON.png",
    text: "python logo",
    name: "PYTHON",
  },
  {
    url: "/assets/C++.png",
    text: "c++ logo",
    name: "C++",
  },
];
const page = () => {
  return (
    <main className="flex flex-wrap justify-evenly">
      {obj.map((detail) => {
        return (
          <SkillCard url={detail.url} text={detail.text} name={detail.name} />
        );
      })}
    </main>
  );
};

export default page;
