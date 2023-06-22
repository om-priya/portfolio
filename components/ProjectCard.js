import Image from "next/image";
const ProjectCard = ({ img_url, title, description, link, live }) => {
  return (
    <section className="flex flex-col items-center max-w-[40vw] border-2 justify-evenly m-4 shadow-xl hover:scale-105">
      <div className="p-2">
        <Image
          src={img_url}
          width={300}
          height={300}
          alt={title}
          className="rounded-lg h-60"
        />
      </div>
      <div className="font-semibold">
        <p>{title}</p>
      </div>
      <div className="text-justify p-4">
        <p>{description}</p>
      </div>
      <div className="flex">
        <a href={link} target="_blank">
          <button className="p-2 mr-3 rounded-2xl border-2 hover:bg-[#884A39] hover:text-white">
            Source Code
          </button>
        </a>
        <a href={live} target="_blank">
          <button className="p-2 rounded-2xl border-2 hover:bg-[#884A39] hover:text-white">
            Live Demo
          </button>
        </a>
      </div>
    </section>
  );
};

export default ProjectCard;
