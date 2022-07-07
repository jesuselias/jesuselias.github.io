import React from "react";

//import stock
import stock from "../img/login1.jpg";
import stock1 from "../img/login2.jpg";
import stock2 from "../img/dashboard.jpg";
import stock3 from "../img/presentacion.jpg";
import stock4 from "../img/si.png";
import stock5 from "../img/dashboard2.jpg";
import stock6 from "../img/Punkubiz-Contabilidad.jpg";
import stock7 from "../img/Admin-Utility-DHL.jpg";
import stock8 from "../img/screencapture-buhoo.png";
import stock9 from "../img/buhoo.jpg";
import stock10 from "../img/react-native.jpg";
import stock11 from "../img/Glew.jpg";
import stock12 from "../img/Glew Campaing.jpg";


class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portafolio</h3>
                <p className="subtitle-a">
                  Ejemplo
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-4">
              <div className="work-box">
                <a href={stock8} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock9} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Buhoo (Monitoreo financiero)</h2>
                        <div className="w-more">
                          <p>
                            Es un sistema que se encarga de monitorear las cuentas bancarias del usuario para detectar las anomalías que se presenta en las diversas transacciones. 
                          </p>
                          <span className="w-ctegory">
                          tech: Angular 12, Node, Materialize
                          </span>
                          
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock7} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock7} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Admin utlity DHL</h2>
                        <div className="w-more">
                          <p>
                            Desarrollo del Sistema Admin-utility para automatizar y controlar la administración de empleados, productos, sistemas, entre otros modulos...; Para lograr la generación de envío de CRA10 de forma válida y automatizada.
                          </p>
                          <span className="w-ctegory">
                            tech: Angular 12, Bootstrap, Materialize
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock6} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock6} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Punkubiz (Proyecto Contable)</h2>
                        <div className="w-more">
                          <p>
                            Desarrollo de un Sistema de Gestión de Inventario, el software fue desarrollado bajo entorno web y fue diseñado para automatizar el sistema.
                          </p>
                          <span className="w-ctegory">
                           tech: Angular 9, Bootstrap, Materialize
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock11} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock10} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Glew</h2>
                        <div className="w-more">
                          <p>
                            Desarrollo en el sistema glew que se encarga de gestionar los perfiles de determinados influencers y marcas.
                          </p>
                          <span className="w-ctegory">
                           tech: React Native
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock12}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock5} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock5} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Ticket Quality</h2>
                        <div className="w-more">
                          <p>
                            Desarrollo del sistema de Calidad de tickets basado en la gestión de control y asignación de tickets al personal.
                          </p>
                          <span className="w-ctegory">
                            tech: VueJS, Vuetify, C#
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock1} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={stock1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">T&M software Factory</h2>
                        <div className="w-more">
                          <p>
                            Desarrollo del sistema de Calidad de tickets basado en la gestión de control y asignación de forma automatica tickets al personal.
                          </p>
                          <span className="w-ctegory">
                           tech: HTML5, SCSS, Vuetify, Vuejs, C#
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Portal Prospecto</h2>
                        <div className="w-more">
                          <p>
                            Desarrollo del sistema de portal de Prospectos basado en la gestión de la selección de nuevo personal.
                          </p>
                          <span className="w-ctegory">
                           tech: HTML5, SCSS, Bootstrap, Angular 8, C#
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock3} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={stock3} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Sistema de Asignación</h2>
                        <div className="w-more">
                          <p>
                            Desarrollo del sistema de asignacion de software es un sistema que permite registar, editar y eliminar los diversos hardware y software; permitiendo asignarle los hadware y software a los usuarios.
                          </p>
                          <span className="w-ctegory">
                            Bootstrap, Angular 8, C#
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock4} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={stock4} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Ignus</h2>
                        <div className="w-more">
                          <p>
                            Desarrollo del sistema de inmobiliaria, gestion de inmobiliaria, con diversos reportes tanto estadistisco como informativo.
                          </p>
                          <span className="w-ctegory">tech: Angular 7, NodeJs</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock6}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock7}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock8}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock9}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock10}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock11}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock12}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
