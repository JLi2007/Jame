import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import LoadingBar from "react-top-loading-bar";
import { showcaseProjects } from "../projects/projects";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub, FaRegNoteSticky } from "react-icons/fa6";
import resume from "../../../public/resume.pdf";
import jam from "../../assets/jam.png";
import jam1 from "../../assets/jam1.png";
import write from "../../assets/write.png";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const isReturningFromPage = sessionStorage.getItem("fromPage");

    // If returning from Notes, skip loading animation
    if (isReturningFromPage) {
      setIsLoaded(true);
      sessionStorage.removeItem("fromPage");
      return;
    }

    let currentProgress = 10;

    const interval = setInterval(() => {
      if (currentProgress < 100) {
        currentProgress += 15;
        setProgress(currentProgress);
      } else {
        clearInterval(interval);
        setIsLoaded(true);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className={`intro-container max-w-screen max-h-screen z-10 ${
          isLoaded ? "fade-out" : ""
        }`}
      >
        <div className="wave-effect" />
        <LoadingBar
          color="#ede8d7"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />

        <div className="relative flex justify-center items-center">
          <h1 className="text-white text-xl crg my-3">can't rush greatness.</h1>
        </div>
      </div>

      <div className="relative content inset-0 overflow-x-hidden">
        <div className="min-w-screen md:max-h-screen md:h-screen w-auto bg-black text-darkBeige2 font-playfair overflow-x-hidden md:overflow-y-hidden ">
          <div className="relative md:w-auto w-screen p-5 bg-midBeige1 rounded-lg text-darkBeige3 m-1 flex flex-row">
            <div className="w-full h-full flex justify-between">
              <h1>james siyuan li</h1>
              <div className="h-full absolute md:right-5 md:top-0 flex items-center">
                <button
                  onClick={() => window.open(resume, "_blank")}
                  className="px-4 p-2 cursor-pointer bg-darkBeige2 text-midBeige1 rounded-md"
                >
                  resume.
                </button>
              </div>
            </div>
          </div>

          {/* side section */}
          <div className="grid grid-flow-row md:grid-flow-col grid-rows-2 gap-1 h-[90vh]">
            <div className="row-span-6 col-span-5 md:w-auto w-screen md:h-auto py-3 px-7 bg-midBeige1 m-1 rounded-lg">
              <span className="italic text-xl drop-shadow-[2px_2px_3px_rgba(0,0,0,0.5)]">
                can't rush greatness.
              </span>
              <div className="text-xl h-[95%] flex items-end">
                <div className="flex flex-col gap-5 text-darkBeige1">
                  <h1>
                    hey i'm <span className="text-darkBeige3">james.</span>
                  </h1>
                  <h1>
                    · founder @{" "}
                    <span className="underline cursor-pointer text-darkBeige2 text-2xl">
                      <a href="https://neoleague.dev/" target="_blank">
                        neodev
                      </a>
                    </span>
                  </h1>
                  <h1>
                    · prev. intern @{" "}
                    <span className="underline cursor-pointer text-darkBeige2 text-2xl">
                      <a href="https://www.weblakes.com/" target="_blank">
                        lakes software
                      </a>
                    </span>
                  </h1>
                  <h1>
                    · prev. junior software dev @{" "}
                    <span className="underline cursor-pointer text-darkBeige2 text-2xl">
                      <a href="https://www.tauria.com/" target="_blank">
                        tauria
                      </a>
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <img
              src={jam}
              className="absolute md:h-auto opacity-98 rounded-xl z-5 md:-left-5 md:w-135 w-80 left-90"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
              }}
            />

            {/* linkedin and notes section */}
            <div className="row-span-1 col-span-6 md:w-auto w-screen md:h-auto grid grid-cols-3 gap-2 m-1">
              {/* linkedin section */}
              <div className="relative col-span-2 py-3 px-7 rounded-lg bg-darkBeige2 text-lightBeige">
                <a
                  href="https://www.linkedin.com/in/james-li-a81004275/"
                  target="_blank"
                  className="absolute inset-0 w-full h-full"
                >
                  <h1 className="absolute italic left-5 top-2">linkedin</h1>
                  <div className="absolute bottom-4 left-2">
                    <GrLinkedin className="w-[4vw] h-[4vh]" />
                  </div>
                  <h1 className="absolute bottom-5 italic right-5 text-lg">
                    we can go connect4connect
                  </h1>
                </a>
              </div>

              {/* notes section */}
              <div className="relative py-3 px-7 rounded-lg bg-midBeige1">
                <a
                  className="absolute inset-0 w-full h-full cursor-pointer"
                  onClick={() => {
                    navigate("/notes");
                  }}
                >
                  <h1 className="absolute italic text-lg left-5 top-2">
                    notes
                  </h1>
                  <div className="absolute bottom-4 left-2">
                    <FaRegNoteSticky className="w-[4vw] h-[4vh]" />
                  </div>

                  <img
                    src={write}
                    className="absolute md:h-auto opacity-30 z-5 md:right-0 md:top-10 md:w-70 w-90 right-85 rounded-xl"
                    style={{
                      WebkitMaskImage:
                        "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)",
                    }}
                  />
                </a>
              </div>
            </div>

            {/* description section */}
            <div className="relative col-span-6 row-span-1 md:w-auto md:h-auto w-screen py-3 px-7 bg-midBeige1 m-1 rounded-lg text-[0.9rem]">
              <div className="md:h-auto w-[20vw] flex flex-col h-full z-6">
                <span className="italic">programmer | student | athlete</span>
                <h1 className="break-normal overflow-hidden md:w-[150] md:mt-5 mt-3">
                  coming from waterloo, james is a full time{" "}
                  <span className="text-darkBeige3">
                    student & problem solver.
                  </span>{" "}
                  in his free time, you will find him programming, playing
                  soccer, or wandering the forest.
                </h1>
                <h1 className="break-normal overflow-hidden md:w-[150] md:mt-4 mt-3">
                  having completed{" "}
                  <span className="font-bold">two software internships </span>{" "}
                  and founded the{" "}
                  <span className="font-bold italic text-darkBeige3">
                    neo developer league
                  </span>
                  , james immerses himself in all aspects of tech, with a
                  primary focus on{" "}
                  <span className="font-bold text-darkBeige3">
                    js/ts full-stack development.
                  </span>
                </h1>
                <h1 className="break-normal overflow-hidden md:w-[150] md:mt-4 mt-3">
                  if you meet him, he'll be happy to start a liveshare and talk
                  about the latest{" "}
                  <span className="italic text-darkBeige3">central cee</span> or{" "}
                  <span className="italic text-darkBeige3">jj lin</span> album
                  drop.
                </h1>
              </div>

              <img
                src={jam1}
                className="absolute md:h-auto opacity-98 z-5 md:right-0 md:top-10 md:w-70 w-90 right-85 rounded-4xl"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)",
                }}
              />
            </div>

            {/* github logo section */}
            <div className="relative col-span-3 row-span-4 md:w-auto w-screen md:h-auto py-3 px-7 m-1 rounded-lg bg-darkBeige1 text-midBeige1 underline">
              <a
                href="https://github.com/JLi2007"
                className="w-full h-full absolute inset-0"
                target="_blank"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaGithub className="w-auto h-[50%]" />
                </div>
              </a>
            </div>

            {/* profiles section */}
            <div className="col-span-6 row-span-4 md:w-auto w-screen md:h-auto py-3 px-7 m-1 rounded-lg bg-midBeige2">
              <div className="flex w-full items-center">
                <div className="flex justify-start w-full">
                  <span className="italic">
                    f*** that, we can go follow4follow
                  </span>
                </div>
                <div className="justify-end flex md:flex-row flex-col w-full underline font-bold">
                  <h1 className="px-3">
                    <a
                      href="https://www.linkedin.com/in/james-li-a81004275/"
                      className="cursor-pointer hover:bg-lightBeige/30 transition delay-100 duration-200 ease-in-out px-1 rounded-sm"
                      target="_blank"
                    >
                      linkedin
                    </a>
                  </h1>
                  <h1 className="px-3">
                    <a
                      href="https://github.com/JLi2007"
                      className="cursor-pointer hover:bg-lightBeige/30 transition delay-100 duration-200 ease-in-out px-1 rounded-sm"
                      target="_blank"
                    >
                      github
                    </a>
                  </h1>
                  <h1 className="px-3">
                    <a
                      href="https://jamesli.jame.li/"
                      className="cursor-pointer hover:bg-lightBeige/30 transition delay-100 duration-200 ease-in-out px-1 rounded-sm"
                      target="_blank"
                    >
                      time machine
                    </a>
                  </h1>
                </div>
              </div>
            </div>

            {/* projects section */}
            <div className="col-span-3 row-span-2 max-w-screen md:h-auto py-3 px-7 m-1 rounded-lg bg-darkBeige1 text-lightBeige">
              <div className="relative w-full h-full">
                <h1 className="italic">projects</h1>
                <div className="flex flex-col justify-center overflow-hidden h-[90%]">
                  {showcaseProjects.map((project, index) => (
                    <div key={index} className="mb-15">
                      <h1 className="underline cursor-pointer">
                        <a
                          href={project.url || "https://jame.li/"}
                          target="_blank"
                        >
                          {project.name}
                        </a>
                      </h1>
                      <span>{project.desc}</span>
                    </div>
                  ))}
                </div>
                <button
                  className="absolute bottom-5 cursor-pointer text-lg font-bold underline hover:bg-lightBeige/5 transition delay-100 duration-200 ease-in-out p-1 rounded-sm"
                  onClick={() => navigate("/projects")}
                >
                  {" "}
                  view all projects{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
