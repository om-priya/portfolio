import ProjectCard from "@/components/ProjectCard";

const objs = [
  {
    img_url: "/projects/op_flix.png",
    title: "OPFLIX",
    description: "Your one stop destination for all the web-series and movies",
    link: "https://github.com/om-priya/opFlix",
    live: "#",
  },
  {
    img_url: "/projects/youtube_clone.png",
    title: "YOUTUBE CLONE",
    description: "UI/UX of youtube with RAPID API(youtube-clone)",
    link: "#",
    live: "#",
  },
  {
    img_url: "/projects/portfolio.png",
    title: "Portfolio Website",
    description:
      "A platform to showcase my skill and passion towards web-development",
    link: "#",
    live: "#",
  },
];
const page = () => {
  return (
    <main>
      <div>
        <h1 className="text-4xl text-center font-bold text-[#884A39]">
          Projects
        </h1>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {objs.map((obj) => {
          return (
            <ProjectCard
              img_url={obj.img_url}
              title={obj.title}
              description={obj.description}
              link={obj.link}
              live={obj.live}
            />
          );
        })}
      </div>
    </main>
  );
};

export default page;
