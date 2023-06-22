import Image from "next/image";
const SkillCard = ({ url, text, name }) => {
  return (
    <section className="flex flex-col items-center min-w-[20vw] border-2 justify-evenly m-4 shadow-xl hover:scale-105">
      <div className="p-2">
        <Image
          src={url}
          width={180}
          height={200}
          alt={text}
          className="rounded-lg bg-[#FAF0E4]"
        />
      </div>
      <div className="font-semibold">
        <p>{name}</p>
      </div>
    </section>
  );
};

export default SkillCard;
