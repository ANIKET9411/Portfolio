import { useState } from "react";
import "./Mywork.css";
function Mywork() {
  let projects = [
    {
      type: "HTML",
      image: "src/Components/My work/photos/tedtalk.png",
      name: "TED TALKS",
      hosted_link: "https://aniket9411.github.io/TEDTALKS-Project/",
      github_link: "https://github.com/ANIKET9411/TEDTALKS-Project.git",
      description:
        "Web developer with expertise in creating innovative and user-friendly websites. Skilled in HTML, CSS, JavaScript, ",
    },
    {
      type: "HTML",
      image: "src/assets/realestate.png",
      name: "REAL ESTATE",
      hosted_link: "https://aniket9411.github.io/THE-REAL-ESTATE/",
      github_link: "https://github.com/ANIKET9411/THE-REAL-ESTATE.git",
      description:
        "Web developer with expertise in creating innovative and user-friendly websites. Skilled in HTML, CSS, JavaScript, ",
    },
    {
      type: "HTML",
      image: "src/assets/aria.png",
      name: "ARIA",
      hosted_link: "https://aniket9411.github.io/MAJOR-PROJECT/",
      github_link: "https://github.com/ANIKET9411/MAJOR-PROJECT.git",
      description:
        "Web developer with expertise in creating innovative and user-friendly websites. Skilled in HTML, CSS, JavaScript, ",
    },
    {
      type: "REACT",
      image: "",
      name: "2",
      hosted_link: "",
      github_link: "",
    },
    {
      type: "REACT",
      image: "",
      name: "2",
      hosted_link: "",
      github_link: "",
    },
    {
      type: "REACT",
      image: "",
      name: "2",
      hosted_link: "",
      github_link: "",
    },
    {
      type: "JS",
      image: "",
      name: "3",
      hosted_link: "",
      github_link: "",
    },
    {
      type: "JS",
      image: "",
      name: "3",
      hosted_link: "",
      github_link: "",
    },
    {
      type: "JS",
      image: "",
      name: "3",
      hosted_link: "",
      github_link: "",
    },
  ];
  function setup(type) {
    setvalue(type);
  }
  let [value, setvalue] = useState("HTML");

  return (
    <div className="mywork">
      <div className="mywork_inner">
        <h1>MY WORK</h1>
        <div className="mywork_nav menu menu-1">
          <span
            className=""
            onClick={() => {
              setup("HTML");
            }}
          >
            HTML
          </span>
          <span
            onClick={() => {
              setup("JS");
            }}
          >
            JAVASCRIPT
          </span>
          <span
            onClick={() => {
              setup("REACT");
            }}
          >
            REACTJS
          </span>
        </div>
        <div className="mywork_main">
          {projects.map((ele) => {
            if (value == ele.type) {
              console.log(ele.name);
              return (
                <div className="Project">
                  <img src={ele.image} height={"100%"} width={"100%"} />
                  <div className="project_detail">
                    <h2>{ele.name}</h2>
                    <p>{ele.description}</p>
                    <div className="project_links">
                      <a href={ele.github_link}>
                        <i class="fa-brands fa-github"></i>
                      </a>
                      <a href={ele.hosted_link}>
                        <i class="fa-solid fa-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
export default Mywork;
