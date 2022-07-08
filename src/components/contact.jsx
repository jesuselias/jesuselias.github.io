import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionSaveInfoUser } from '../actions/userAction';
import Request from '../api';
import imageOverlay from "../img/earth.jpg";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


// const registering = useSelector(state => state.registration.registering);
// const dispatch = useDispatch();

// function handleChange(e) {
//   const { name, value } = e.target;
//   setUser(user => ({ ...user, [name]: value }));
//   console.log(user)
// }

// const dispatcher = useDispatch();

// let { user } = useSelector(({ user }) => user);

// function handleSubmit(e) {
//   e.preventDefault();

//   setSubmitted(true);
//   if (username && email && subject && message) {
//       dispatcher(actionSaveInfoUser.register(user));
//   }
// }

function Contact () {
  
const form = useRef();

const MySwal = withReactContent(Swal)

//------------------useState---------------
// const [username, changeUserName] = useState('');
// const [email, changeEmail] = useState('');
// const [subject, changeSubject] = useState('');
// const [message, changeMessage] = useState('');

// const [submitted, setSubmitted] = useState(false);
//------------------end--------------------
// const registering = useSelector(state => state.registration.registering);
// const dispatch = useDispatch();

// function handleChange(e) {
//   const { name, value } = e.target;
//   setUser(user => ({ ...user, [name]: value }));
//   console.log(user)
// }

const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_y6232ba', 'template_6p557yw', form.current, 'rSi7ORVYIvUQ2JrVf')
    .then((result) => {
        console.log(result.text);
        MySwal.fire({
          icon: 'success',
          title: 'Mensaje enviado con exito',
          text: 'Gracias por su mensaje, me comunico al correo enviado.',
          position: 'center',
        })
    }, (error) => {
        console.log(error.text);
    });
};

//linea que comente para usar el email

// const dispatcher = useDispatch();

// let { user } = useSelector(({ user }) => user);

// function handleSubmit(e) {
//   e.preventDefault();

//   setSubmitted(true);
//   if (username && email && subject && message) {
//       dispatcher(actionSaveInfoUser.register(user));
//   }
// }

    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
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
                        <form
                          // action="https://formspree.io/xdoeonlo"
                          onSubmit={sendEmail}
                          ref={form}
                          // method="POST"
                          // className="contactForm"
                        >
                          <div id="sendmessage">
                            Your message has been sent. Thank you!
                          </div>
                          <div id="errormessage"></div>
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="from_name"
                                  className="form-control"
                                  // id="name"
                                  placeholder="nombre"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 4 chars"
                                  // value={user.username} 
                                  // onChange={(text) => { 
                                  //   changeUserName({ username: text})
                                  //     user.username = text;
                                  //     dispatcher(actionSaveInfoUser(user.username));
                                  //   }}
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="to_name"
                                  // id="email"
                                  placeholder="Email"
                                  data-rule="email"
                                  data-msg="Please enter a valid email"
                                  // value={user.email} 
                                  // onChange={(text) => { 
                                  //   changeEmail({ email: text})
                                  //     user.email = text;
                                  //     dispatcher(actionSaveInfoUser(user));
                                  //   }}
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="reply_to"
                                  // id="subject"
                                  placeholder="Asunto"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 8 chars of subject"
                                  // value={user.subject} 
                                  // onChange={(text) => { 
                                  //   changeSubject({ subject: text})
                                  //     user.subject = text;
                                  //     dispatcher(actionSaveInfoUser(user));
                                  //   }}
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  data-rule="required"
                                  data-msg="Please write something for us"
                                  placeholder="Mensaje"
                                  // value={user.message} 
                                  // onChange={(text) => { 
                                  //   changeMessage({ message: text})
                                  //     user.message = text;
                                  //     dispatcher(actionSaveInfoUser(user));
                                  //   }}
                                ></textarea>
                                <div className="validation"></div>
                              </div>
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
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Contacto</h5>
                      </div>
                      <br />
                      <ul className="list-ico">
                        <li><span className="ion-ios-location"></span> Venezuela Estado Lara</li>
                        <li><span className="ion-ios-telephone"></span> +584245989356</li>
                        <li><span className="ion-email"></span> jesus.e.elias.s@gmail.com</li>
                        <li><span className="ion-email"></span> jesus_e1992@hotmail.com</li>
                      </ul>
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
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }


export default Contact;
