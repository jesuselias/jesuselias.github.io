import React from "react";

//import login1
import login1 from "../img/login1.jpg";
import login2 from "../img/login2.jpg";
import dashboard from "../img/dashboard.jpg";
import presentacion from "../img/presentacion.jpg";
import si from "../img/si.png";
import dashboard2 from "../img/dashboard2.jpg";
import punkubiz from "../img/Punkubiz-Contabilidad.jpg";
import adminUtlity from "../img/Admin-Utility-DHL.jpg";
import buhoo from "../img/screencapture-buhoo.png";
import buhoo2 from "../img/buhoo.jpg";
import reactNative from "../img/react-native.jpg";
import glew from "../img/Glew.jpg";
import glewCampaing from "../img/Glew Campaing.jpg";
import banco from "../img/Banco.jpg";


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
                  Ejemplos
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-4">
              <div className="work-box">
                <a href={banco} data-lightbox="gallery-banco">
                  <div className="work-img">
                    <img src={banco} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Banco de Chile</h2>
                        <div className="w-more">
                          <p>
                          Continuidad Web del Portal Persona del Banco de Chile Responsable y colaborador del desarrollador Full-Stack 
                          en el cual he participado en varios Tickets de jira de incidentes, eventos, vulnerabilidades, mejoras.., entre otras actividades colaborativa para el trabajo.
                          </p>
                          <span className="w-ctegory">
                          tech: Angular, Java, Spring Boot, JavaScript y TypeScript
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
                <a href={buhoo} data-lightbox="gallery-buhoo">
                  <div className="work-img">
                    <img src={buhoo2} alt="" className="img-fluid" />
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
                <a href={adminUtlity} data-lightbox="gallery-adminUtlity">
                  <div className="work-img">
                    <img src={adminUtlity} alt="" className="img-fluid" />
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
                <a href={punkubiz} data-lightbox="gallery-punkubiz">
                  <div className="work-img">
                    <img src={punkubiz} alt="" className="img-fluid" />
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
                <a href={glew} data-lightbox="gallery-glew">
                  <div className="work-img">
                    <img src={reactNative} alt="" className="img-fluid" />
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
                  href={glewCampaing}
                  data-lightbox="gallery-glew"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={dashboard2} data-lightbox="gallery-dashboard2">
                  <div className="work-img">
                    <img src={dashboard2} alt="" className="img-fluid" />
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
                <a
                  href={dashboard}
                  data-lightbox="gallery-dashboard2"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={login2} data-lightbox="gallery-login2">
                  <div className="work-img">
                    <img src={login2} alt="" className="img-fluid" />
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
                <a href={login1} data-lightbox="gallery-login1">
                  <div className="work-img">
                    <img src={login1} alt="" className="img-fluid" />
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
                <a href={presentacion} data-lightbox="gallery-presentacion">
                  <div className="work-img">
                    <img src={presentacion} alt="" className="img-fluid" />
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
                            tech: Bootstrap, Angular 8, C#
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
                <a href={si} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={si} alt="" className="img-fluid" />
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
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
