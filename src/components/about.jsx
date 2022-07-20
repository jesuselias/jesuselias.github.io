import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { 
          id: "Angular_skill", 
          content: "Angular",
          porcentage: "90%", 
          value: "90" 
        },
        {
          id: "VueJS_skill",
          content: "VueJS",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "React-Native_skill",
          content: "React-Native",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Materialize_skill",
          content: "Materialize",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "Bootstrap_skill",
          content: "Bootstrap",
          porcentage: "90%",
          value: "90"
        },
        { 
          id: "CSS_skill", 
          content: "CSS", 
          porcentage: "90%", 
          value: "90" 
        },
        
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "TypeScript_skill",
          content: "TypeScript",
          porcentage: "90%",
          value: "90"
        },
        { 
          id: "HTML5_skill", 
          content: "HTML5", 
          porcentage: "90%", 
          value: "90" 
        },
        {
          id: "NodeJS_skill",
          content: "NodeJS",
          porcentage: "50%",
          value: "50"
        },
        {
          id: "C#_skill",
          content: "C#",
          porcentage: "40%",
          value: "40"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Photoshop_skill",
          content: "Photoshop",
          porcentage: "90%",
          value: "90"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Innovador e implementador en el desarrollo de software dedicado al estudio, práctica y conocimiento del campo de la informática."
        },
        {
          id: "second-p-about",
          content:
            "Ingeniero Informático, desarrollador con más experiencia laboral en el área de Front-End; Full-Stack de JavaScript y TypeScript (MEAN, MERN, MEVN), y aplicaciones móviles (React-Native), Experiencia en diversos sistemas de información orientados a la administración, manejo y análisis de datos... Con habilidades en detección y solución de problemas ."
        },
        {
          id: "third-p-about",
          content:
            "Profesional en ingeniería informática egresado de la Universidad Centroccidental Lisandro Alvarado (UCLA)"
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">SOBRE MI</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
