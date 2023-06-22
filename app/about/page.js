export const metadata = {
  title: "About Page",
  description: "Know about me",
};

const page = () => {
  return (
    <main className="flex items-center flex-wrap justify-around min-h-[80vh]">
      <div>
        <img
          src="https://media.giphy.com/media/wzTupMouLd3xfiusDC/giphy.gif"
          width="400"
          height="400"
        />
      </div>
      <div className="max-w-[40vw]">
        <h1 className="text-5xl font-bold mb-2 text-center">
          About <span className="text-[#884A39]">Me</span>
        </h1>
        <div>
          <p className="text-justify mb-2">
            As a web developer, I am dedicated to creating dynamic and
            responsive websites that provide a seamless user experience. I have
            experience working with modern technologies such as HTML, CSS,
            JavaScript and various frameworks such as React. My goal is to
            constantly improve my skills and stay updated with the latest
            industry trends.
          </p>
          <p className="text-justify mb-2">
            In addition to my technical skills, I am also a strong communicator
            and a team player. I am always looking for new opportunities to
            collaborate and learn from others in the industry.
          </p>
          <p className="text-justify">
            If you are looking for a web developer who is dedicated to creating
            high-quality websites, please feel free to contact me. I am always
            open to discussing new projects and opportunities.
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
