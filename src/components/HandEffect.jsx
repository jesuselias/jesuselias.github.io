import React from 'react';
import styled from 'styled-components';
import handImage from '../img/MeGusta3.png';

// Importa el helper keyframes
import { keyframes } from 'styled-components';

const bounceAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
`;

const HandContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  overflow: hidden;
`;

const HandImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: ${bounceAnimation} 0.5s infinite alternate;
`;

export default function HandEffect({ isVisible }) {
  const [showHand, setShowHand] = React.useState(false);

  React.useEffect(() => {
    let timer;
    if (isVisible) {
      setShowHand(true);
      timer = setTimeout(() => setShowHand(false), 4000);
    } else {
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <HandContainer>
      <HandImage 
        src={handImage} 
        alt="Mano" 
        style={{ 
          opacity: showHand ? 1 : 0
        }}
      />
    </HandContainer>
  );
}
