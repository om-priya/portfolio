import ProjectCard from "@/components/ProjectCard";

const objs = [
  {
    img_url: "/projects/op_flix.png",
    title: "OPFLIX",
    description: "Your one stop destination for all the web-series and movies",
    link: "https://github.com/om-priya/opFlix",
    live: "https://op-flix.vercel.app/",
  },
  {
    img_url: "/projects/youtube_clone.png",
    title: "YOUTUBE CLONE",
    description: "UI/UX of youtube with RAPID API(youtube-clone)",
    link: "https://github.com/om-priya/youtube-clone",
    live: "https://youtube-clone-seven-phi.vercel.app/",
  },
  {
    img_url: "/projects/portfolio.png",
    title: "Portfolio Website",
    description:
      "A platform to showcase my skill and passion towards web-development",
    link: "https://github.com/om-priya/portfolio",
    live: "https://om-portfolio-fawn.vercel.app/",
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
      <div className="flex flex-col flex-wrap sm:flex-row justify-evenly items-center min-w-full">
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
