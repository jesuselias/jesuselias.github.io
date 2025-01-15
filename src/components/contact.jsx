import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import imageOverlay from "../img/earth.jpg";

function Contact() {
  const form = useRef();
  const MySwal = withReactContent(Swal);

  // Estado para los campos del formulario
  const [fields, setFields] = useState({
    from_name: "",
    to_name: "",
    reply_to: "",
    message: "",
  });

  // Maneja los cambios en los campos
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  // Reinicia los campos
  const resetFields = () => {
    setFields({
      from_name: "",
      to_name: "",
      reply_to: "",
      message: "",
    });
  };

  // Maneja el envío del formulario
  const sendEmail = (e) => {
    e.preventDefault();

    // Validación básica
    if (
      fields.from_name === "" ||
      fields.to_name === "" ||
      fields.reply_to === "" ||
      fields.message === ""
    ) {
      MySwal.fire({
        icon: 'warning',
        title: 'Por favor complete todos los campos',
        text: 'Para continuar con el envío del mensaje.',
        position: 'center',
      });
      return;
    }

    // Envío del formulario
    emailjs
      .sendForm('service_y6232ba', 'template_6p557yw', form.current, 'rSi7ORVYIvUQ2JrVf')
      .then(
        (result) => {
          if (result.text === 'OK') {
            MySwal.fire({
              icon: 'success',
              title: 'Mensaje enviado con éxito',
              text: 'Gracias por su mensaje, me comunicaré al correo enviado.',
              position: 'center',
            }).then(() => resetFields());
          }
        },
        (error) => {
          MySwal.fire({
            icon: 'error',
            title: 'Error al enviar el mensaje',
            text: 'Por favor, inténtelo nuevamente.',
            position: 'center',
          });
          console.error(error.text);
        }
      );
  };

  return (
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: `url(${imageOverlay})` }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Enviar mensaje</h5>
                    </div>
                    <div>
                      <form onSubmit={sendEmail} ref={form}>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <input
                              type="text"
                              name="from_name"
                              className="form-control"
                              placeholder="Nombre"
                              value={fields.from_name}
                              onChange={handleFieldChange}
                            />
                          </div>
                          <div className="col-md-12 mb-3">
                            <input
                              type="email"
                              name="to_name"
                              className="form-control"
                              placeholder="Email"
                              value={fields.to_name}
                              onChange={handleFieldChange}
                            />
                          </div>
                          <div className="col-md-12 mb-3">
                            <input
                              type="text"
                              name="reply_to"
                              className="form-control"
                              placeholder="Asunto"
                              value={fields.reply_to}
                              onChange={handleFieldChange}
                            />
                          </div>
                          <div className="col-md-12 mb-3">
                            <textarea
                              name="message"
                              className="form-control"
                              rows="5"
                              placeholder="Mensaje"
                              value={fields.message}
                              onChange={handleFieldChange}
                            ></textarea>
                          </div>
                          <div className="col-md-12">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                            >
                              Enviar mensaje
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6 text-center">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Contacto</h5>
                    </div>
                    <br />
                    <div style={{ marginLeft: '150px' }}>
                        <ul className="list-ico text-left" >
                          <li><span className="ion-ios-location"></span> Venezuela Estado Lara</li>
                          <li><span className="ion-ios-telephone"></span> +584245989356</li>
                          <li><span className="ion-email"></span> jesus.e.elias.s@gmail.com</li>
                          <li><span className="ion-email"></span> jesus_e1992@hotmail.com</li>
                        </ul>
                      </div>
                      <br />
                      <div className="socials">
                        <ul>
                          <li>
                            <a
                              href="https://github.com/jesuselias"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/jesus-e-elias-s-8b0345148/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.youtube.com/watch?v=Kn2vPoNENks"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-youtube"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
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

export default Contact;
