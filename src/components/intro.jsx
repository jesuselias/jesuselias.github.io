import React from 'react';
import "./styles/stars.scss";
import Typed from "react-typed";
import styled from "styled-components"
import logo1 from "../img/Foto-perfil-7777.png";
import VisitCounter from './VisitCounter';
// import HandEffect from './HandEffect';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #56afc4;
`;

const Img = styled.img`
  width:200px;
  height:200px;
`;

const CounterContainer = styled.div`
  text-align: center;
  margin-top: 117px;
`;

// const LikeButton = styled.button`
//   background-color: #007bff;
//   border: none;
//   color: white;
//   padding: 10px 20px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   cursor: pointer;
//   border-radius: 5px;
// `;

// const LikeCounter = styled.span`
//   background-color: #56afc4;
//   color: white;
//   padding: 10px 17px;
//   border-radius: 50%;
//   font-weight: bold;
//   margin-left: 10px;

// `;

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visits: 100,
      likes: 0,
      handVisible: false,
    };
  }

  componentDidMount() {
    this.updateVisits();
  }

  updateVisits = () => {
    const visitsFromStorage = localStorage.getItem('visits') ? parseInt(localStorage.getItem('visits')) : 100;
    this.setState({ visits: visitsFromStorage });
  };

  handleClick = () => {
    this.setState(prevState => ({
      likes: prevState.likes + 1,
      handVisible: true
    }), () => {
      setTimeout(() => {
        this.setState({ handVisible: false });
      }, 4000);
    });
  };

  render() {
    return (
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <div className="image">
                <Img src={logo1} />
              </div>
              <h2 className="intro-title xs-4">Hola, soy Jesus Elias</h2>
              <Title>Ingeniero en Informática</Title>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Full Stack Developer",
                      "Mobile Developer",
                      "Software Engineer",
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <div>
                {/* <p className="pt-3 d-inline-block">
                  <a
                    className="btn btn-primary btn js-scroll px-4 mr-3"
                    href="#work"
                    role="button"
                  >
                    Mi Trabajo
                  </a>
                </p> */}
                <p className="pt-3 d-inline-block">
                  <a
                    className="btn btn-primary btn js-scroll px-4"
                    href="https://jesuselias.github.io/Experiencia/"
                    role="button"
                  >
                    Experiencia
                  </a>
                </p>
              </div>
              <CounterContainer>
                <VisitCounter />
                {/* <LikeCounter>{this.state.likes}</LikeCounter> */}
                {/* <div style={{display: 'flex', alignItems: 'center'}}>
                  <LikeButton onClick={this.handleClick}>
                    Me gusta
                  </LikeButton>
                  {this.state.handVisible && <HandEffect isVisible={true} />}
                </div> */}
              </CounterContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
